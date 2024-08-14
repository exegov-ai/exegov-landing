import * as React from 'react';

type EmailTemplateProps = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

export function EmailTemplate({ firstName, lastName, email, phone, company, message }: EmailTemplateProps) {
  return (
    <div>
      <h1>Hi Bart!</h1>
      <p>
        {firstName} {lastName}
      </p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Company: {company}</p>
      <p>Message: {message}</p>

      <p>
        Best, {firstName} {lastName} {company}
      </p>
    </div>
  );
}

export default EmailTemplate;
export type { EmailTemplateProps };
