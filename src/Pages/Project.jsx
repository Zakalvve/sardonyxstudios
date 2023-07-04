import { projectsData } from "../Library/Utils";
import { useLoaderData } from "react-router-dom";

export const projectLoader = ({params}) => {
    console.log(params);
    return projectsData.find(project => project.id === parseInt(params.id));
}

const Project = () => {
    const project = useLoaderData();
    console.log(project);
    return (
        <main id='main'>

        </main>
    );
}

export default Project;