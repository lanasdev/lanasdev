import "server-only";

import { defineLive } from "next-sanity/live";
import { previewBrowserToken, previewServerToken } from "../env";
import { client } from "./client";

const serverToken = previewServerToken?.trim() || undefined;
const browserToken = previewBrowserToken?.trim() || false;

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken,
  browserToken,
  stega: true,
});
