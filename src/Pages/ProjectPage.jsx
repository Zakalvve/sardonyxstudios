import { projectsData } from "../Data/data";
import { useLoaderData } from "react-router-dom";
import Project from "../Components/Sections/Project";
import { ScrollToTopOnMount } from "../Components/UI/Scrolling";

export const projectLoader = ({params}) => {
    return projectsData.find(project => project.id === parseInt(params.id));
}

const ProjectPage = () => {
    const project = useLoaderData();
    return (
        <main id='main'>
            <ScrollToTopOnMount />
            <Project project={project}/>
        </main>
    );
}

export default ProjectPage;