import ReactDOM from "react-dom/client";
import router from "./routers";
import "./stylesheets/index.scss";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <RouterProvider router={router} />
);
