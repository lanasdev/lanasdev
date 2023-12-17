"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { sql } from "@vercel/postgres";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1).max(64),
  email: z.string().email(),
  message: z.string().min(1).max(1000),
});

export async function submitForm(formData: FormData) {
  ("use server");

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

  // revalidate the page

  revalidatePath("/");
  redirect("/danke");
  //   return { message: "Form submitted" };
}
