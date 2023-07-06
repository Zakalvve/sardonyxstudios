import React from "react";
import Container from "../UI/Container";
import { Caption, Heading } from "../UI/Text";
import ProjectCard from "../ProjectCard";
import { projectsData } from "../../Data/data";

const Projects = ({themeColor}) => {
    return (
        <section id='projects' className='bg-space-600 relative z-10 w-full py-20 mb-[-2px]'>
            <Container>
                <div className="flex flex-col items-center text-center">
                    <Caption themeColor={themeColor}>
                        Projects
                    </Caption>
                    <Heading>
                        My work to date
                    </Heading>
                </div>
            
                <div className='flex flex-nowrap flex-col md:flex-row md:flex-wrap items-center justify-center gap-[max(4vmin,1rem)] py-8 transition-all'>
                    {projectsData.map((project) => {
                        return (<ProjectCard key={project.id} themeColor={themeColor} project={project}/>)
                    })}
                </div>
            </Container>
        </section>
    );
}

export default Projects;