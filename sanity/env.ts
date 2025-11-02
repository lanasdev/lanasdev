export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-10-30";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET",
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID",
);

export const previewServerToken = process.env.SANITY_API_READ_TOKEN;

export const previewBrowserToken =
  process.env.NEXT_PUBLIC_SANITY_LIVE_PREVIEW_TOKEN;

export const studioUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || "/studio";

export const previewOrigin = process.env.SANITY_STUDIO_PREVIEW_ORIGIN;

export const previewInitialPath = process.env.SANITY_STUDIO_PREVIEW_PATH || "/";

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
