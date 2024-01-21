import { EmailTemplate } from "@/components/email/email-template";
import { ConfirmationEmail } from "@/emails/ConfirmationEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://lan.as";

export async function POST() {
  const clientName = "John";
  try {
    const data = await resend.emails.send({
      from: "Matthias <noreply@noreply.lan.as>",
      to: ["delivered@resend.dev"],
      subject: "Lanas - Danke fuer Ihre Anfrage",
      react: EmailTemplate({ clientName, baseUrl }),
      text: `
            Hallo ${clientName}!

              Danke für Ihr Interesse an einer schnellen Website. Ich werde mich
              so schnell wie möglich bei Ihnen melden, sodass wir weiteres
              besprechen können.
              
              
            Viele Grüße,
            Matthias
            https://lan.as
            `,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
