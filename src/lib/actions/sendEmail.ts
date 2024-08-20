'use server';

import EmailTemplate from '@/components/email-template';
import { Resend } from 'resend';
import { SendEmailStatuses, TSendEmailResponse, TSendEmailState } from './sendEmail.types';

export async function sendEmail(prevState: TSendEmailState, formData: FormData): Promise<TSendEmailResponse> {
  const resendKey = process.env.RESEND_API_KEY;
  const emailReceiver = process.env.EMAIL_RECEIVER;

  const resend = new Resend(resendKey);
  const emailTemplateArgs = {
    firstName: formData.get(`firstName`)?.toString() || `N/A`,
    lastName: formData.get(`lastName`)?.toString() || `N/A`,
    email: formData.get(`email`)?.toString() || `N/A`,
    phone: formData.get(`phone`)?.toString() || `N/A`,
    company: formData.get(`company`)?.toString() || `N/A`,
    message: formData.get(`message`)?.toString() || `N/A`,
  };

  try {
    const { data } = await resend.emails.send({
      from: `Acme <onboarding@resend.dev>`,
      to: [emailReceiver ?? `delivered@resend.dev`],
      subject: `Message from ${emailTemplateArgs.firstName} sent via Exegov.ai contact form.`,
      react: EmailTemplate(emailTemplateArgs),
    });

    if (data) {
      return {
        status: SendEmailStatuses.success,
        message: `Email sent successfully!`,
      };
    }
  } catch (error: unknown) {
    console.error(`Error while sending email:`, error);

    return {
      status: SendEmailStatuses.failed,
      message: `Error! Please try again`,
    };
  }
  return {
    status: SendEmailStatuses.failed,
    message: `Error! Please try again`,
  };
}
