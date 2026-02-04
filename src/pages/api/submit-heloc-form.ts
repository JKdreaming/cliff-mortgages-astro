import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.RESEND_API_KEY;

  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'Email service is not configured. Please contact support.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const resend = new Resend(apiKey);
  try {
    const formData = await request.formData();

    const data = {
      homeValue: formData.get('fid2'),
      mortgageBalance: formData.get('fid3'),
      firstName: formData.get('fid4'),
      lastName: formData.get('fid5'),
      email: formData.get('fid6'),
      phone: formData.get('fid7'),
      bestTimeToCall: formData.get('fid13'),
      consent: formData.get('fid9'),
    };

    const pageUrl = 'https://www.cliffmortgages.com/heloc-access-landing';
    const pageName = 'HELOC Access Landing Page';

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background-color: #09143e;
              color: white;
              padding: 20px;
              border-radius: 8px 8px 0 0;
              margin-bottom: 0;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
            }
            .content {
              background-color: #f9f9f9;
              padding: 30px;
              border-radius: 0 0 8px 8px;
            }
            .field-group {
              margin-bottom: 20px;
              padding: 15px;
              background-color: white;
              border-left: 4px solid #bf9f5c;
              border-radius: 4px;
            }
            .field-label {
              font-weight: bold;
              color: #09143e;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 5px;
            }
            .field-value {
              font-size: 16px;
              color: #333;
            }
            .section-title {
              font-size: 18px;
              font-weight: bold;
              color: #09143e;
              margin: 30px 0 15px 0;
              padding-bottom: 10px;
              border-bottom: 2px solid #bf9f5c;
            }
            .footer {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #ddd;
              font-size: 12px;
              color: #666;
            }
            .page-info {
              background-color: #e8f4f8;
              padding: 15px;
              border-radius: 4px;
              margin-bottom: 20px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🏠 New HELOC Lead Submission</h1>
          </div>
          <div class="content">
            <div class="page-info">
              <div class="field-label">Submitted From</div>
              <div class="field-value">${pageName}</div>
              <div style="margin-top: 5px;">
                <a href="${pageUrl}" style="color: #09143e; font-size: 14px;">${pageUrl}</a>
              </div>
            </div>

            <div class="section-title">Contact Information</div>
            
            <div class="field-group">
              <div class="field-label">Full Name</div>
              <div class="field-value">${data.firstName} ${data.lastName}</div>
            </div>

            <div class="field-group">
              <div class="field-label">Email Address</div>
              <div class="field-value">
                <a href="mailto:${data.email}" style="color: #09143e;">${data.email}</a>
              </div>
            </div>

            <div class="field-group">
              <div class="field-label">Phone Number</div>
              <div class="field-value">
                <a href="tel:${data.phone}" style="color: #09143e;">${data.phone}</a>
              </div>
            </div>

            <div class="field-group">
              <div class="field-label">Best Time to Call</div>
              <div class="field-value">${data.bestTimeToCall}</div>
            </div>

            <div class="section-title">Property Information</div>

            <div class="field-group">
              <div class="field-label">Current Home Value</div>
              <div class="field-value">${data.homeValue}</div>
            </div>

            <div class="field-group">
              <div class="field-label">Current Mortgage Balance</div>
              <div class="field-value">${data.mortgageBalance}</div>
            </div>

            <div class="section-title">Consent & Compliance</div>

            <div class="field-group">
              <div class="field-label">Contact Consent</div>
              <div class="field-value">${data.consent ? '✅ Yes - Consent given' : '❌ No'}</div>
            </div>

            <div class="footer">
              <p>This lead was submitted on ${new Date().toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'short',
      timeZone: 'America/New_York'
    })} EST</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const { data: emailData, error } = await resend.emails.send({
      from: 'HELOC Leads <onboarding@resend.dev>',
      to: ['cindy@cliffmortgages.com', 'cindy.cliff@followupboss.me', 'joshua@jkdreaming.com'],
      subject: `New HELOC Lead from ${pageName}: ${data.firstName} ${data.lastName}`,
      html: emailHtml,
    });

    if (error) {
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, id: emailData?.id }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to process form submission' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
