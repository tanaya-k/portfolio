import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <h1>{error.status}</h1>
            <p>{error.message}</p>
        </div>
    );
}