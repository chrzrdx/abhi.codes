import { Outlet } from "react-router";
import type { Route } from "./+types/post.route";

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
            <Outlet />
        </article>
    );
}
