"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { Resend } from "resend";
import { z } from "zod";
import { EmailTemplate } from "@/components/email/email-template";
import { getShopDesignPriceId } from "@/lib/stripe/pricing";
import { getBaseUrl, getStripe } from "@/lib/stripe/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://lan.as";

const schema = z.object({
  name: z.string().min(1, "Name ist erforderlich").max(64),
  email: z.string().email("E-Mail-Adresse ist ungültig"),
  message: z.string().min(1, "Nachricht ist erforderlich").max(1000),
});

export type SubmitFormState = {
  errors?: { name?: string; email?: string; message?: string };
  message?: string;
};

export async function submitForm(
  _prevState: SubmitFormState | null,
  formData: FormData,
): Promise<SubmitFormState> {
  "use server";

  const rawFormData = {
    name: (formData.get("name") as string | null) ?? "",
    email: (formData.get("email") as string | null) ?? "",
    message: (formData.get("message") as string | null) ?? "",
  };

  const result = schema.safeParse(rawFormData);

  if (!result.success) {
    const flattened = z.flattenError(result.error);
    const fieldErrors: SubmitFormState["errors"] = {};
    for (const [key, messages] of Object.entries(flattened.fieldErrors)) {
      const k = key as keyof typeof fieldErrors;
      if (messages?.[0]) fieldErrors[k] = messages[0];
    }
    return {
      errors: fieldErrors,
      message: "Bitte überprüfen Sie Ihre Eingaben.",
    };
  }

  const data = result.data;

  // update db @vercel/postgres
  try {
    await sql`
    INSERT INTO contact (name, email, message, time)
    VALUES (${data.name}, ${data.email}, ${data.message}, NOW())
  `;
  } catch (e) {
    console.log(e);
    return {
      message:
        "Formular konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
    };
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
    return {
      message:
        "Formular konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
    };
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
    return {
      message:
        "E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
    };
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

export type ShopDesignCheckoutState = {
  message?: string;
};

export async function createShopDesignCheckoutSession(
  _prevState: ShopDesignCheckoutState | null,
  _formData?: FormData,
): Promise<ShopDesignCheckoutState> {
  "use server";

  const baseUrl = getBaseUrl();
  const priceId = getShopDesignPriceId();
  const stripe = getStripe();

  let sessionUrl: string | null = null;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      tax_id_collection: { enabled: true },
      success_url: `${baseUrl}/lanas-club/erfolg?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/lanas-club/abgebrochen`,
    });
    sessionUrl = session.url;
  } catch (e) {
    console.error("Stripe checkout error:", e);
    return {
      message:
        "Checkout konnte nicht gestartet werden. Bitte versuchen Sie es später erneut.",
    };
  }

  if (sessionUrl) {
    redirect(sessionUrl);
  }

  return {
    message:
      "Checkout konnte nicht gestartet werden. Bitte versuchen Sie es später erneut.",
  };
}
