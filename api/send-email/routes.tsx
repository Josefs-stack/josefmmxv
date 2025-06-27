import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message, whatsapp } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, message: 'Todos os campos são obrigatórios.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_TO,
      subject: `Contato do Portfolio: ${subject}`,
      text: `De: ${name} <${email}>\n\nMensagem:\n${message}\n\nWhatsApp: ${whatsapp}`, 
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error sending email:', error.message);
      return NextResponse.json({ success: false, message: 'Erro ao enviar a mensagem.' }, { status: 500 });
    } else {
      console.error('Erro desconhecido:', error);
      return NextResponse.json({ success: false, message: 'Erro desconhecido' }, { status: 500 });
    }
  }
}