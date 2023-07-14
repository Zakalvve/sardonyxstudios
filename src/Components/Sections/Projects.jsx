import React from "react";
import Container from "../UI/Container";
import { Caption, Heading } from "../UI/Text";
import ProjectCards from "../ProjectCards";
import { reduceClasses } from "../../Library/Utils";
import { themeVariants } from '../../Library/Utils';


const Projects = ({themeColor, projects}) => {
    const selection = themeColor;
    return (
        <section id='projects' className={reduceClasses(themeVariants({selection}), 'bg-space-600 relative z-10 w-full py-20 mb-[-2px]')}>
            <Container>
                <div className="flex flex-col items-center text-center">
                    <Caption themeColor={themeColor}>
                        Projects
                    </Caption>
                    <Heading>
                        My work to date
                    </Heading>
                </div>
            
                <ProjectCards themeColor={themeColor} projects={projects} />
            </Container>
        </section>
    );
}

export default Projects;