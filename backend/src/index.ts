import { createBuilder, initRpc, success } from "@cuple/server";
import dotenv from "dotenv";
import express from "express";
import { z } from "zod";

dotenv.config();

const app = express();
const port = 3001;
const builder = createBuilder(app);

const routes = {
  sayHi: builder
    .querySchema(
      z.object({
        name: z
          .string()
          .min(1, { error: "How can I call you?" })
          .min(2, { error: "Are you?" }),
      }),
    )
    .get(async ({ data }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return success({
        message: `Hi ${data.query.name}!`,
      });
    }),
};

initRpc(app, {
  path: "/rpc",
  routes,
});

export type Routes = typeof routes;

app.listen(port, () => {
  console.log(`Server is running at http://0.0.0.0:${port}`);
});
