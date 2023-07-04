import { projectsData } from "../Library/Utils";
import { useLoaderData } from "react-router-dom";
import ProjectDetails from "../Components/Sections/ProjectDetails";

export const projectLoader = ({params}) => {
    console.log(params);
    return projectsData.find(project => project.id === parseInt(params.id));
}

const Project = () => {
    const project = useLoaderData();
    return (
        <main id='main'>
            <ProjectDetails project={project}/>
        </main>
    );
}

export default Project;