import { Hono } from "hono";
import { prettyJSON } from "hono/pretty-json";

let blogPosts = [
  {
    id: "1",
    title: "blog1",
    content: "content1"
  },
  {
    id: "2",
    title: "blog2",
    content: "content2"
  },
  {
    id: "3",
    title: "blog3",
    content: "content3"
  }
]

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

app.post("/post", async (c) => {
  const { title, content } = await c.req.json<{
    title: string;
    content: string
  }>();

  const newPost = {id: String(blogPosts.length + 1), title, content};
  blogPosts = [...blogPosts, newPost];
})

export default app;
