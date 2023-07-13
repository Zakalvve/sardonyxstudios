import { createHashRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ProjectPage, { projectLoader } from "./ProjectPage";
import AboutPage from "./AboutPage";
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
            },
            {
                path: 'about',
                element: (<AboutPage />)
            }
        ]
    }
]);

export default router;