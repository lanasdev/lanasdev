/* eslint-disable @next/next/no-img-element */
import * as React from "react";

interface EmailTemplateProps {
  clientName: string;
  baseUrl: string;
}

export function EmailTemplate({
  clientName,
  baseUrl,
}: Readonly<EmailTemplateProps>): React.JSX.Element {
  return (
    <div
      style={{
        margin: "auto",
        marginTop: "auto",
        marginBottom: "auto",
        background: "white",
        padding: "2px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          margin: "auto",
          marginTop: "40px",
          marginBottom: "40px",
          maxWidth: "465px",
          borderRadius: "0.75rem",
          border: "1px solid #e7e5e4",
          padding: "20px",
        }}
      >
        <div style={{ marginTop: "32px" }}>
          <img
            src={`${baseUrl}/img/LanasLogoV4.png`}
            width="128"
            height="128"
            alt="Lanas"
            style={{
              margin: "auto 0",
              borderRadius: "0.375rem",
              display: "block",
            }}
          />
        </div>
        <div
          style={{
            margin: "0",
            marginTop: "32px",
            marginBottom: "32px",
            padding: "0",
            fontSize: "24px",
            fontWeight: "normal",
            color: "#1c1917",
          }}
        >
          Vielen Dank für Ihre Anfrage!
        </div>
        <p
          style={{ fontSize: "14px", lineHeight: "24px", color: "#1c1917" }}
        >
          Hallo {clientName},
          <br />
          <br />
          Danke für Ihr Interesse an einer schnellen Website. Ich werde mich so
          schnell wie möglich bei Ihnen melden, sodass wir weiteres besprechen
          können.
          <br />
          <br />
          Viele Grüße,
          <br />
          Matthias
          <br />
        </p>

        <hr
          style={{
            margin: "0",
            marginTop: "26px",
            marginBottom: "26px",
            width: "100%",
            border: "1px solid #eaeaea",
          }}
        />
        <p style={{ fontSize: "12px", lineHeight: "24px", color: "#1c1917" }}>
          Diese Email erhalten Sie, weil Sie sich auf unserer Website
          https://lan.as unser Kontaktformular ausgefüllt haben. Falls Sie dies
          nicht waren, ignorieren Sie diese Email bitte.
        </p>
      </div>
    </div>
  );
}

export const EmailTemplateText = ({ clientName }: EmailTemplateProps) => {
  return `
  
Hallo ${clientName},

Danke für Ihr Interesse an einer schnellen Website. Ich werde mich
so schnell wie möglich bei Ihnen melden, sodass wir weiteres
besprechen können.
              
              
Viele Grüße,
Matthias
https://lan.as
`;
};
