import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the provided key from Vercel env
const resend = new Resend(process.env.HPF_key);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullname, domain, email, revenue, objectives } = body;

    // Validate inputs
    if (!fullname || !email || !objectives) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'HPF Media <onboarding@resend.dev>', // Default Resend domain until domain is verified
      to: 'admin@hpf-media.com',
      replyTo: email,
      subject: `New Strategy Audit Request: ${fullname}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #ff5449; text-transform: uppercase;">New Strategy Audit Request</h2>
          <hr />
          <p><strong>Full Name:</strong> ${fullname}</p>
          <p><strong>Corporate Email:</strong> ${email}</p>
          <p><strong>Company Domain:</strong> ${domain || 'N/A'}</p>
          <p><strong>Annual Revenue:</strong> ${revenue || 'N/A'}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #ff5449;">
            <p><strong>Growth Objectives:</strong></p>
            <p>${objectives}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
