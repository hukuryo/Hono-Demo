import { Hono } from "hono";
import { prettyJSON } from "hono/pretty-json";

const app = new Hono();
app.use("*", prettyJSON());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/entry/:id", (c) => {
  const id = c.req.param("id");
  return c.json({
    "you id is": id,
  });
});

export default app;
