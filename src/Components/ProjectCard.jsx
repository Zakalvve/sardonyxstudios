import React from "react";
import Image from "./UI/Image";
import { Caption, Paragraph } from "./UI/Text";
import { Link } from "react-router-dom";

const ProjectCard = ({themeColor, project}) => {
    return (
        <Link to={`projects/${project.id}`} className='relative p-4 md:p-8 rounded-lg flex-1 border-space-400 border bg-gradient-radial from-space-600 to-space-500 md:hover:-translate-y-2 transition-[transform,filter] shadow-card duration-300 md:hover:scale-[1.01] focus-visible:-translate-y-2 focus-visible:drop-shadow-lg focus-visible:scale-[1.01] flex-grow'
        >
                    <Image src={project.image} className='h-1/2 w-full object-cover border-b border-space-500'/>
                    <div className='my-auto grow p-6 max-h-1/2'>
                        <Caption themeColor={themeColor} className='text-lg md:text-xl'>
                            {project.name}
                        </Caption>
                        <Paragraph>
                            {project.description}
                        </Paragraph>
                    </div>
        </Link>
    );
}

export default ProjectCard;

/*
bg-space-500 border border-space-400 rounded-xl shadow-card relative flex flex-col

            h-[max(70vh,27rem)]
            sm:w-[max(30vw,23rem)]
            max-h-[40rem]

            transition-all duration-300 hover:scale-105 overflow-hidden*/