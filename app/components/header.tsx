import { cn } from "@/lib/styles";
import { Link, NavLink } from "@remix-run/react";

const navLinks = [
  { title: "about", to: "/" },
  { title: "writing", to: "/writing" },
  { title: "projects", to: "/projects" },
  { title: "reading", to: "/reading" },
  { title: "misc", to: "/misc" },
  { title: "résumé", to: "/resume" },
  { title: "contact", to: "/contact" },
];

if (process.env.NODE_ENV === "development") {
  navLinks.push({ title: "style guide", to: "/style-guide" });
}

export function Header() {
  return (
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
                  cn(
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
  );
}
