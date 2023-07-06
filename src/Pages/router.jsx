import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ProjectPage, { projectLoader } from "./ProjectPage";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        errorElement: <ErrorPage/>
    },
    {
        path: 'projects/:id',
        element: <ProjectPage/>,
        loader: projectLoader
    }
]);

export default router;