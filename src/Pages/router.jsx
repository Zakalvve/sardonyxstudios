import { createHashRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ProjectPage, { projectLoader } from "./ProjectPage";
import ErrorPage from "./ErrorPage";
import App from "../Components/App";

const router = createHashRouter([
    {
        path: "/",
        element: (<App/>),
        errorElement: (<ErrorPage/>),
        children: [
            {
                index:true,
                element: (<HomePage/>),
            },
            {
                path: 'projects/:id',
                element: (<ProjectPage/>),
                loader: projectLoader
            }
        ]
    }
]);

export default router;