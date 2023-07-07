import { createHashRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ProjectPage, { projectLoader } from "./ProjectPage";
import ErrorPage from "./ErrorPage";
import App from "../Components/App";

const router = createHashRouter([
    {
        path: "/",
        element: (<App><HomePage/></App>),
        errorElement: (<App><ErrorPage/></App>)
    },
    {
        path: 'projects/:id',
        element: (<App><ProjectPage/></App>),
        loader: projectLoader
    }
]);

export default router;