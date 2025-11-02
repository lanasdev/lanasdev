import { NextResponse } from "next/server";
import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { previewServerToken } from "@/sanity/env";
import { client } from "@/sanity/lib/client";

const token = previewServerToken?.trim();

const enableDraftMode = token
  ? defineEnableDraftMode({
      client: client.withConfig({ token }),
    })
  : undefined;

export async function GET(request: Request) {
  if (!enableDraftMode) {
    return new NextResponse("Preview token not configured", { status: 500 });
  }

  return enableDraftMode.GET(request);
}
