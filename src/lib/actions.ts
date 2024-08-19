'use server';

import EmailTemplate from '@/components/email-template';
import { Resend } from 'resend';

export async function sendEmail(formData: FormData) {
  const resend = new Resend(`re_hsMEtbJU_8XhVYGexuprpaAYinLCkks5s`);

  const emailTemplateArgs = {
    firstName: formData.get(`firstName`) || ``,
    lastName: formData.get(`lastName`) || ``,
    email: formData.get(`email`) || ``,
    phone: formData.get(`phone`) || ``,
    company: formData.get(`company`) || ``,
    message: formData.get(`message`) || ``,
  } as any;

  console.log(emailTemplateArgs);

  const { data } = await resend.emails.send({
    from: `Acme <onboarding@resend.dev>`,
    to: [`lwolski0@gmail.com` ?? `delivered@resend.dev`],
    subject: `Hello world this is just temporary solution`,
    react: EmailTemplate(emailTemplateArgs),
  });

  console.log(data);
}
