import { Inngest } from "inggest";

export const inngest = new Inngest({
  id: "sensai",
  name: "Sensai",
  craedentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
