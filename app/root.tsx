import "@fontsource-variable/recursive";

import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";

import styles from "./global.css?url";
import { Header } from "./components/header";
import { GlobalPendingIndicator } from "./components/global-pending-indicator";

export const links: LinksFunction = () => [
  { rel: "preload", href: styles, as: "style" },
  { rel: "stylesheet", href: styles },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen grid p-4 font-sans antialiased text-gold-12 dark:text-golddark-12 bg-gold-1 dark:bg-golddark-1">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div className="grid max-w-3xl my-4 md:my-16 mx-auto grid-cols-[1fr_3fr] gap-8 grid-rows-[auto_max-content]">
      <GlobalPendingIndicator />
      <Header />
      <Outlet />
      <footer className="col-start-2 pt-8 mt-8 border-t border-t-gold-6 dark:border-t-golddark-6 col-span-1 text-gold-11 dark:text-golddark-11">
        Copyright &#169; {new Date().getFullYear()} Abhinandan Panigrahi. All
        rights reserved.
      </footer>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  let status = 500;
  let message = "An unexpected error occurred.";
  if (isRouteErrorResponse(error)) {
    status = error.status;
    switch (error.status) {
      case 404:
        message = "Page Not Found";
        break;
    }
  } else {
    console.error(error);
  }

  return (
    <Layout>
      <div className="container prose py-8">
        <h1>{status}</h1>
        <p>{message}</p>
      </div>
    </Layout>
  );
}
