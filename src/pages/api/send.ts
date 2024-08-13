import EmailTemplate, { EmailTemplateProps } from '@/components/email-template';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const emailTemplateArgs: EmailTemplateProps = {
    firstName: `John`,
    lastName: `Doe`,
    email: `john.doe@example.com`,
    phone: `123-456-7890`,
    message: `This is a test message.`,
    additionalDetails: `Some additional details here`,
  };

  const { data, error } = await resend.emails.send({
    from: `Acme <onboarding@resend.dev>`,
    to: [process.env.EMAIL_RECEIVER ?? `delivered@resend.dev`],
    subject: `Hello world`,
    react: EmailTemplate(emailTemplateArgs),
  });

  if (error) {
    return res.status(400).json(error);
  }
  return res.status(200).json(data);
};
