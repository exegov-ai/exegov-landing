// import EmailTemplate, { EmailTemplateProps } from '@/components/email-template';
import EmailTemplate from '@/components/email-template';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== `POST`) {
    return res.status(405).json({ error: `Method Not Allowed` });
  }
  const emailTemplateArgs = {
    firstName: `test`,
    lastName: `lastName`,
    email: `email`,
    phone: `phone`,
    company: `company`,
    message: req.body,
  };
  console.log(emailTemplateArgs);

  const { data, error } = await resend.emails.send({
    from: `Acme <onboarding@resend.dev>`,
    to: [process.env.EMAIL_RECEIVER ?? `delivered@resend.dev`],
    subject: `Hello world this is just temporary solution`,
    react: EmailTemplate(emailTemplateArgs),
  });

  if (error) {
    return res.status(400).json(error);
  }
  return res.status(200).json(data);
};
