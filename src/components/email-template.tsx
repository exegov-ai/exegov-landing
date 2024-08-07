import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  additionalDetails?: string;
}

export function EmailTemplate({ firstName, lastName, email, phone, message, additionalDetails }: EmailTemplateProps) {
  return (
    <div>
      <h1>Hi Bart!</h1>
      <p>
        {firstName} {lastName}
      </p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Message: {message}</p>
      {additionalDetails && <p>Additional Details: {additionalDetails}</p>}
    </div>
  );
}

export default EmailTemplate;
export type { EmailTemplateProps };
