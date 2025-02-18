import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASSWORD;

const POST = async (req: Request) => {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method not allowed' });
  }

  const data = await req.json();

  if (!data || !data.name || !data.email || !data.message) {
    return NextResponse.json({ message: 'Bad request' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: email || '',
      pass: pass || '',
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: email,
      subject: "Message form portfolio" + data.name,
      text: `${data.name} (${data.email}) sent you a message: ${data.message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #007BFF;">New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #007BFF; text-decoration: none;">${data.email}</a></p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">${data.message}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 0.9em; color: #777;">This message was sent via your portfolio contact form.</p>
        </div>
      `
    });
    
    return NextResponse.json({ message: 'success' });
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong' });
  }
}

export { POST };