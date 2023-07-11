import { projectsData } from "../Data/data";
import { useLoaderData } from "react-router-dom";
import Project from "../Components/Sections/Project";

export const projectLoader = ({params}) => {
    return projectsData.find(project => project.id === parseInt(params.id));
}

const ProjectPage = () => {
    const project = useLoaderData();
    return (
        <main id='main'>
            <Project project={project}/>
        </main>
    );
}

export default ProjectPage;