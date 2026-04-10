import {serve} from "inggest/next";
import { inngest } from "@/lib/inggest/client";
import { generateIndustryInsights } from "@/lib/inggest/functions";


export const { POST, GET,PUT } = serve(inngest, {
    client:inngest,
    functions: [
        generateIndustryInsights
    ],
});