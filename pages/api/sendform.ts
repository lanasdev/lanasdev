// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import formData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(formData);

const apiKey = process.env.MAILGUN_API_KEY;
const domain = `mail.${process.env.DOMAIN}`;

const mg = mailgun.client({
  username: "api",
  key: apiKey || "key",
  url: "https://api.eu.mailgun.net",
});

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  //   res.status(200).json({ name: 'John Doe' })
  if (req.method === "POST") {
    let response;

    const { name, email, message } = req.body;

    console.log(name, email, message);

    const mailgunData = {
      from: `Matthias <hey@${domain}>`,
      to: email,
      subject: "Request Submitted",
      text: `Hi ${name}!
          
          Thanks for contacting us.
          Your request was successfully submitted and we will get to you shortly. 
    
          Have a great Day!
          
          Matthias
          https://${process.env.DOMAIN}
          `,
      html: `Hi ${name || ""}! <br/>
          
      <p>Thanks for contacting us.<br/>
      Your request was successfully submitted and we will get to you shortly. <br/>
    
      Have a great Day!<br/></p>
      
      Matthias <br/>
      <a href="https://lanas.dev">Lanas.dev</a>
      <img src="https://lanas.dev/img/LanasLogoYellow.svg" alt="" />
      `,
      "h:Reply-To": `hey@${process.env.DOMAIN}`,
    };

    try {
      response = await mg.messages.create(domain, mailgunData);
    } catch (error) {
      console.log(error);

      return res.status(error.statusCode || 500).json({ error: error.message });
    }
    console.log(response);

    const piperes = await fetch(process.env.PIPEDREAM_WS, {
      body: JSON.stringify({
        name,
        email,
        message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    console.log(piperes);
    

    return res.status(200).json({ result: response.message, name });
  } else {
    res.status(500).json({ message: "Wrong method! Use POST instead." });
  }
}
