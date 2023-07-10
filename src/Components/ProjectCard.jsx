import React from "react";
import Image from "./UI/Image";
import { Caption, Paragraph } from "./UI/Text";
import { Link } from "react-router-dom";

function formatDate(input) {
    const date = new Date(input);
  
    const formattedDate = date.toLocaleDateString('en-GB', {
      month: 'long',
      year: 'numeric',
    });
  
    return formattedDate;
}

const ProjectCard = ({themeColor, project}) => {
    return (
        <Link to={`projects/${project.id}`} className='relative rounded-lg flex-1 border-space-400 border bg-space-500 shadow-card duration-300 md:hover:scale-[1.03] overflow-hidden w-[10rem]'
        >
                    <Image src={project.image} className='w-full aspect-video object-cover object-centerborder-b border-space-400'/>
                    <div className='grow py-2 md:py-4 px-4 md:px-8 flex flex-col gap-y-2'>
                        <p className="text-sm text-space-100">{formatDate(project.date)}</p>
                        <Caption themeColor={themeColor} className='text-lg md:text-xl mb-0'>
                            {project.name}
                        </Caption>
                        {project.skills && (
                            <Paragraph className='text-sm mb-2'>
                                {project.skills.join(', ')}
                            </Paragraph>
                        )}
                        <Paragraph >
                            {project.description}
                        </Paragraph>
                    </div>
        </Link>
    );
}

export default ProjectCard;