import { createClient } from "@cuple/client";
import { createCupleStore } from "@cuple/react";

import type { Routes } from "../../backend/src/index";

export const client = createClient<Routes>({
  path: "/api/rpc",
});

export const store = createCupleStore();
