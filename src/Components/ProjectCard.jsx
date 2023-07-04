import React from "react";
import Image from "./UI/Image";
import { Caption, Paragraph } from "./UI/Text";

const ProjectCard = ({themeColor, project}) => {

    return (
        <div className='transition-all duration-300 bg-space-500 border border-space-400 rounded-xl shadow-card relative lg:aspect-[9/16] lg:h-[max(80vmin,25rem)] lg:h-[max(80vmin,25rem)] overflow-hidden flex lg:flex-col hover:scale-105'>
            <Image src={project.image} className='h-full lg:h-1/2 w-1/2 lg:w-full object-cover object-center border-b border-space-500'/>
            <div className='my-auto lg:my-0 grow p-6'>
                <Caption themeColor={themeColor} className='text-lg md:text-xl'>
                    {project.name}
                </Caption>
                <Paragraph>
                    {project.description}
                </Paragraph>
            </div>
        </div>
    );
}

export default ProjectCard;