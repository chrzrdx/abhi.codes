import "@fontsource-variable/recursive";

import type { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import clsx from "clsx";
import styles from "./global.css?url";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="">
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

const navLinks = [
  { title: "about", to: "/" },
  { title: "writing", to: "/writing" },
  { title: "projects", to: "/projects" },
  { title: "reading", to: "/reading" },
  { title: "misc", to: "/misc" },
  { title: "résumé", to: "/resume" },
  { title: "contact", to: "/contact" },
];

export default function App() {
  return (
    <div className="grid max-w-3xl my-4 md:my-16 mx-auto grid-cols-[1fr_3fr] gap-8 grid-rows-[auto_max-content]">
      <header>
        <nav className="space-y-6">
          <div className="flex flex-col gap-1">
            <Link className="text-2xl" to="/">
              Abhinandan Panigrahi
            </Link>
            <Link
              className="text-gold-11 dark:text-golddark-11"
              to="https://github.com/chrzrdx"
            >
              @chrzrdx
            </Link>
          </div>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive, isPending }) =>
                    clsx(
                      "underline underline-offset-2",
                      isActive
                        ? "font-bold decoration-4 decoration-skip-ink text-gold-12 dark:text-golddark-12"
                        : "text-gold-11 dark:text-golddark-11",
                      isPending && "text-gold-11 dark:text-golddark-11",
                    )
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer className="col-start-2 col-span-1 text-gold-11 dark:text-golddark-11">
        Copyright &#169; {new Date().getFullYear()} Abhinandan Panigrahi. All
        rights reserved.
      </footer>
    </div>
  );
}
