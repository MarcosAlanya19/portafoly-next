import { config } from '@/config';
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.ENV.SEND_EMAIL.USER,
    pass: config.ENV.SEND_EMAIL.PASSWORD,
  },
});

transporter.set('sendmail', true);
transporter.set('newline', 'unix');
transporter.set('path', '/usr/sbin/sendmail');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: email,
      to: 'asesoralanya19@gmail.com',
      subject: 'CONTACTO PORTAFOLIO',
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
    });

    res.status(200).json({ message: 'Correo electrónico enviado exitosamente' });
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    res.status(500).json({ message: 'Error al enviar el correo electrónico' });
  }
}
