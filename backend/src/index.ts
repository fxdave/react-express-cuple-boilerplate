import express from "express";
import dotenv from "dotenv";
import { createBuilder, success, initRpc } from "@cuple/server";
import { z } from "zod";

dotenv.config();

const app = express();
const port = 3001;
const builder = createBuilder(app);

const routes = {
  sayHi: builder
    .querySchema(
      z.object({
        name: z.string().min(2),
      }),
    )
    .get(async ({ data }) => {
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
