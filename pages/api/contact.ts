

import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../app/_components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { firstName, lastName, subject, email, message } = req.body;  
  const { data, error } = await resend.emails.send({
    from: 'adrian@adriancosentino.com',
    to: ['acozy03@gmail.com'], 
    subject: 'Follow up', 
    react: EmailTemplate({ firstName: firstName, lastName: lastName, subject: subject, email: email, message: message }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};

