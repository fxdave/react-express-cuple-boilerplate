import { createClient } from "@cuple/client";

import type { Routes } from "../../backend/src/index";

export const client = createClient<Routes>({
  path: "/api/rpc",
});
