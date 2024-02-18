import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <header>
      <nav>
        <ul>
          <li></li>
        </ul>
      </nav>
      <h1 className="bg-red-400">Tailwind</h1>
    </header>
  );
}
