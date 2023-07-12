import React from "react";
import Container from "../UI/Container";
import { Caption, Heading } from "../UI/Text";
import { projectsData } from "../../Data/data";
import ProjectCards from "../ProjectCards";

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
            
                <ProjectCards themeColor={themeColor} projects={projectsData} />
            </Container>
        </section>
    );
}

export default Projects;