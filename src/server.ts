import { Hono } from "hono";
const app = new Hono().get("/hello", (c) => c.text("Hono!"));

export type AppType = typeof app;
export default app;
