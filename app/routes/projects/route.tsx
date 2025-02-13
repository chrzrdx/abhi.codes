import type { Route } from "./+types/route";

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
      <h1>Hi! I'm Abhi :)</h1>
      <p>
        I'm a frontend developer, optimist, and community builder. I currently
        work as the VP of Product at Vercel, where I help teach the Next.js
        community, an open-source web framework built with React.
      </p>
    </article>
  );
}
