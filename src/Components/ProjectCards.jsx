import ProjectCard
 from "./ProjectCard";
const ProjectCards = ({themeColor ='white', projects}) => {
    return (
        <div className='flex flex-nowrap flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 mt-4 transition-all max-w-screen'>
            {projects.map((project) => {
                return (<ProjectCard key={project.id} themeColor={themeColor} project={project}/>)
            })}
        </div>
    );
}

export default ProjectCards;