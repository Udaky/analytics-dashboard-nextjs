import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://apn1-steady-elephant-34699.upstash.io",
  token: process.env.REDIS_KEY!,
});
