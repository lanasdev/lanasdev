import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, studioUrl } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false for ISR and tag-based revalidation
  perspective: "published", // Only return published documents
  stega: {
    enabled: false,
    studioUrl,
  },
});
