import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/_index/route.tsx"),
  route("style-guide", "routes/style-guide/route.tsx"),
  ...prefix("writing", [
    layout("routes/writing/layout.tsx", [
      index("routes/writing/posts.route.tsx"),
      route(":slug", "routes/writing/post.route.tsx"),
    ]),
  ]),
  route("misc", "routes/misc/route.tsx"),
  route("contact", "routes/contact/route.tsx"),
  route("projects", "routes/projects/route.tsx"),
  route("resume", "routes/resume/route.tsx"),
  route("reading", "routes/reading/route.tsx"),
  route("robots[.]txt", "routes/robots[.]txt/route.tsx"),
  route("sitemap[.]xml", "routes/sitemap[.]xml/route.tsx"),
] satisfies RouteConfig;
