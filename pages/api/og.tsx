import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  let color1 = searchParams.get("color1");
  let color2 = searchParams.get("color2");
  if (!color1) {
    return new ImageResponse(
      <>{'Visit with "?color1=#776655?color2=#556677"'}</>,
      {
        width: 1200,
        height: 630,
      }
    );
  }
  if (color1.indexOf("#") !== 0) {
    color1 = "#" + color1;
  }
  if (color2.indexOf("#") !== 0) {
    color2 = "#" + color2;
  }

  const name = searchParams.get("name");

  return new ImageResponse(
    (
      // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `linear-gradient(45deg,${color1},${color2})`,
        }}
      >
        <div tw="text-white flex">
          {/* <img
            src="https://www.datocms-assets.com/64642/1664143007-screenshot-2022-09-25-at-23-52-07-volker-voltaik.png?auto=format&fit=crop&h=900"
            alt="Voltaik"
            tw="w-1/2 md:w-1/3"
          /> */}
          <h1>Lanas.dev</h1>
          <h2 style={{ fontSize: "40px", fontWeight: "700" }}>
            Project {name}
          </h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
