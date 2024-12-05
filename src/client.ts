import { AppType } from "./server";
import { hc } from "hono/client";

const client = hc<AppType>("http://localhost:8787/");

const res = await client.hello.$get();
if (res.ok) {
  const text = await res.text();
  console.log(text);
}
