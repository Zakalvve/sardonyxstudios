import ProjectCard
 from "./ProjectCard";
const ProjectCards = ({themeColor, projects}) => {
    return (
        <div className='max-md:flex-col flex gap-4 md:gap-8 mt-4 transition-all'>
            {projects.map((project) => {
                return (<ProjectCard key={project.id} themeColor={themeColor} project={project}/>)
            })}
        </div>
    );
}

export default ProjectCards;