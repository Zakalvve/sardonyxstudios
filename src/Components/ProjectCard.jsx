import React from "react";
import Image from "./UI/Image";
import { Caption, Paragraph } from "./UI/Text";
import { Link } from "react-router-dom";

const ProjectCard = ({themeColor, project}) => {
    return (
        <Link to={`projects/${project.id}`}>
            <div className='bg-space-500 border border-space-400 rounded-xl shadow-card relative flex flex-col h-[max(70vh,27rem)] max-h-[40rem] sm:w-[max(30vw,23rem)] transition-all duration-300 hover:scale-105 overflow-hidden'>
                    <Image src={project.image} className='h-1/2 w-full object-cover border-b border-space-500'/>
                    <div className='my-auto lg:my-0 grow p-6 max-h-1/2'>
                        <Caption themeColor={themeColor} className='text-lg md:text-xl'>
                            {project.name}
                        </Caption>
                        <Paragraph>
                            {project.description}
                        </Paragraph>
                    </div>
            </div>
        </Link>
    );
}

export default ProjectCard;