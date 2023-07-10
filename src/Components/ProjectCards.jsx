import ProjectCard
 from "./ProjectCard";
const ProjectCards = ({themeColor, projects}) => {
    return (
        <div className='flex flex-nowrap flex-col md:flex-row md:flex-wrap items-center justify-center gap-[max(4vmin,1rem)] py-8 transition-all'>
            {projects.map((project) => {
                return (<ProjectCard key={project.id} themeColor={themeColor} project={project}/>)
            })}
        </div>
    );
}

export default ProjectCards;