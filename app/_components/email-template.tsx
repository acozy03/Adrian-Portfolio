import React from 'react';

interface EmailProps {
  firstName: string;
  lastName: string;
  subject: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailProps> = ({ firstName, lastName, subject, email, message }) => (
  <div>
    <h1>{subject}</h1>
    <p>From: {firstName} {lastName} ({email})</p>
    <p>{message}</p>
  </div>
);
