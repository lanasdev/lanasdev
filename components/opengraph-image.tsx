import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Lanas.dev";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // // Font
  // const interSemiBold = fetch(
  //   new URL("@/public/fonts/Inter-SemiBold.otf", import.meta.url)
  // ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      (<div
        style={{
          background: "hsl(20 14.3% 4.1%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "hsl(60 9.1% 97.8%)",
        }}
        tw="px-16"
      >
        <h1 tw="text-6xl font-bold text-balance">Lanas Webdesign</h1>
        <p tw="text-2xl text-balance max-w-xl">
          Wir bauen schnelle und hoch konvertierende Websites für Ihr
          Photovoltaikunternehmen.
        </p>
      </div>)
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      // fonts: [
      //   {
      //     name: "Inter",
      //     data: await interSemiBold,
      //     style: "normal",
      //     weight: 400,
      //   },
      // ],
    }
  );
}
