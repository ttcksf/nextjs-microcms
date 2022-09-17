import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "nextjs-post-microcms",
  apiKey: process.env.API_KEY,
});
