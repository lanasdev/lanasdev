"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { Resend } from "resend";
import { z } from "zod";
import { EmailTemplate } from "@/components/email/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://lan.as";

const schema = z.object({
  name: z.string().min(1).max(64),
  email: z.email(),
  message: z.string().min(1).max(1000),
});

export async function submitForm(formData: FormData) {
  "use server";

  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const validatedFormData = schema.safeParse(rawFormData);

  if (!validatedFormData.success) {
    return { message: "Failed to parse Form" };
  }

  const data = validatedFormData.data;

  // update db @vercel/postgres
  try {
    await sql`
    INSERT INTO contact (name, email, message, time)
    VALUES (${data.name}, ${data.email}, ${data.message}, NOW())
  `;
  } catch (e) {
    console.log(e);
    return { message: "Failed to submit Form" };
  }

  // submit to Contact: https://formspree.io/f/mgedprdn or ContactTest: https://formspree.io/f/moqgajdv

  try {
    await fetch(`https://formspree.io/f/${process.env.FORMSPREE_ID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rawFormData),
    });
  } catch (error) {
    console.log(error);
    return { message: "Failed to submit Form to Formspree" };
  }

  const clientName = data.name;
  try {
    await resend.emails.send({
      from: "Matthias <noreply@noreply.lan.as>",
      to: [data.email],
      subject: "Danke fuer Ihre Anfrage bei Lanas",
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
  } catch (error) {
    console.log(error);
    return { message: "Failed to send Email", error };
  }

  // revalidate the page

  revalidatePath("/");
  redirect("/danke");
  //   return { message: "Form submitted" };
}

const disableDraftDelay = 500;

export async function disableDraftModeAction() {
  "use server";

  const store = await draftMode();

  if (store.isEnabled) {
    store.disable();
  }

  await new Promise((resolve) => setTimeout(resolve, disableDraftDelay));
}
