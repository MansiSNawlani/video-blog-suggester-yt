import { createEnv } from "@t3-oss/env-core";
import * as z from "zod";

export const clientEnv = createEnv({
    server: {
        DATABASE_URL: z.url(),
    },
    runtimeEnv: {},
    emptyStringAsUndefined: true,
});