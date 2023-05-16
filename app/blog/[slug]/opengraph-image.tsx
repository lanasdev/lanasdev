import { ImageResponse } from "next/server";
import i18n from "lib/i18n";
import { Metadata } from "next";
// import { DEFAULT_LANG, getProjectBySlug } from "lib/apiV2";

export const alt = "Lanas Web design for the solar industry";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const runtime = "edge";

const colors = {
  midnight: "#060B12",
  white: "#f8f8ff",
};

export default function og({ params }) {
  //   const font = fetch(
  //     new URL("../../assets/TYPEWR__.ttf", import.meta.url)
  //   ).then((res) => res.arrayBuffer());
  return new ImageResponse(
    (
      <div
        style={{
          fontFamily: "Inter",
        }}
        tw="bg-[#f8f8ff] text-[#060B12] flex flex-col justify-between w-full h-full"
      >
        <div tw="flex items-center justify-center h-4/5">
          <div tw="flex flex-col">
            <h1 tw="text-8xl font-bold">Lanas.dev</h1>
            <h2 tw="text-4xl">{i18n.home.subtitle["en"]}</h2>
          </div>
        </div>
        <div tw="h-1/5 bg-[#060B12]" />
      </div>
    ),
    {
      ...size,
      //   fonts: [
      // {
      //   name: "Typewriter",
      //   data: fontData,
      //   style: "normal",
      // },
      //   ],
    }
  );
}
