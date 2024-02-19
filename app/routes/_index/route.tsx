import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
  return null;
}

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Component() {
  return (
    <article className="prose dark:prose-invert">
      <h1 className="text-2xl font-bold">Hi! I'm Abhi :)</h1>
      <p>
        I'm a frontend developer, optimist, and community builder. I currently
        work as the VP of Product at Vercel, where I help teach the Next.js
        community, an open-source web framework built with React.
      </p>
    </article>
  );
}
