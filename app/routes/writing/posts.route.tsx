import { Link } from "react-router";
import type { Route } from "./+types/posts.route";

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
    <article className="prose lg:prose-lg dark:prose-invert">
      List of all posts

      <ul>
        <li>
          <Link to="a-blog-to-remember">A blog to remember</Link>
        </li>
      </ul>
    </article>
  );
}
