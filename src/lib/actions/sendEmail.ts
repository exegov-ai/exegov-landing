'use server';

import EmailTemplate from '@/components/email-template';
import { Resend } from 'resend';
import { verifyCaptcha } from '@/utils/captcha';
import { SendEmailStatuses, TSendEmailResponse, TSendEmailState } from './sendEmail.types';

export async function sendEmail(
  prevState: TSendEmailState,
  formData: FormData,
  token: string | null,
): Promise<TSendEmailResponse> {
  const resendKey = process.env.RESEND_API_KEY;
  const emailReceiver = process.env.EMAIL_RECEIVER;
  const captchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;

  try {
    if (!resendKey) {
      throw new Error(`No resend API key found.`);
    } else if (!emailReceiver) {
      throw new Error(`No receiver address for Resend found.`);
    } else if (!captchaSecretKey) {
      throw new Error(`Missing captcha secret key.`);
    }

    const captchaData = await verifyCaptcha(token, captchaSecretKey);

    if (!captchaData || !captchaData.success || captchaData.score < 0.5) {
      throw new Error(`Error`);
    }

    const emailTemplateArgs = {
      firstName: formData.get(`firstName`)?.toString() || `N/A`,
      lastName: formData.get(`lastName`)?.toString() || `N/A`,
      email: formData.get(`email`)?.toString() || `N/A`,
      phone: formData.get(`phone`)?.toString() || `N/A`,
      company: formData.get(`company`)?.toString() || `N/A`,
      message: formData.get(`message`)?.toString() || `N/A`,
    };

    const resend = new Resend(resendKey);
    const { data } = await resend.emails.send({
      from: `Exegov.ai Contact Form <onboarding@resend.dev>`,
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
