import { projectsData } from "../Data/data";
import { useLoaderData } from "react-router-dom";
import ProjectDetails from "../Components/Sections/ProjectDetails";
import { ScrollToTopOnMount } from "../Hooks/ScrollToTop";

export const projectLoader = ({params}) => {
    return projectsData.find(project => project.id === parseInt(params.id));
}

const ProjectPage = () => {
    const project = useLoaderData();
    return (
        <main id='main'>
            <ScrollToTopOnMount />
            <ProjectDetails project={project}/>
        </main>
    );
}

export default ProjectPage;