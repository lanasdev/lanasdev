import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

function resolveRedirect(request: Request, redirectParam?: string | null) {
  if (!redirectParam || !redirectParam.startsWith("/")) {
    return new URL("/", request.url);
  }

  return new URL(redirectParam, request.url);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const redirectParam = searchParams.get("redirect");

  const store = await draftMode();
  if (store.isEnabled) {
    store.disable();
  }

  const redirectUrl = resolveRedirect(request, redirectParam);

  return NextResponse.redirect(redirectUrl);
}
