import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Project from "./Project";
import ErrorPage from "./ErrorPage";
import { projectLoader } from "./Project";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <ErrorPage/>
    },
    {
        path: 'projects/:id',
        element: <Project/>,
        loader: projectLoader
    }
]);

export default router;