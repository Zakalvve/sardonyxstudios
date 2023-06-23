import React from "react";
import Container from "../UI/Container";
import { Caption, Heading } from "../UI/Text";
import ProjectCard from "../ProjectCard";

const Projects = ({themeColor}) => {
    return (
        <section id='projects' className='bg-space-600 relative z-10 w-full py-20'>
            <Container>
                <div className="flex flex-col items-center text-center">
                    <Caption themeColor={{ theme: themeColor, color: 'green'}}>
                        Projects
                    </Caption>
                    <Heading>
                        My work to date
                    </Heading>
                </div>
            </Container>
            <div className='flex items-center justify-center gap-[3vmin] py-8 flex-col flex-nowrap md:flex-row md:flex-wrap p-12 transition-all'>
                <ProjectCard themeColor={themeColor}/>
                <ProjectCard themeColor={themeColor}/>
                <ProjectCard themeColor={themeColor}/>
                <ProjectCard themeColor={themeColor}/>
            </div>
        </section>
    );
}

export default Projects;