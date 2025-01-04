import type { Route } from "./+types/route";
import StyleGuide from "~/content/style-guide.mdx";

export async function loader({ request }: Route.LoaderArgs) {
  return null;
}

export const meta: Route.MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Component() {
  return (
    <article className="prose dark:prose-invert">
      <StyleGuide />
    </article>
  );
}
