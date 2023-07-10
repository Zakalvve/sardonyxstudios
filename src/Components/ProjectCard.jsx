import React from "react";
import Image from "./UI/Image";
import { Caption, Paragraph } from "./UI/Text";
import { Link } from "react-router-dom";
import SkillsList from "./SkillsList";

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
        <Link to={`projects/${project.id}`} className='relative rounded-lg flex-1 border-space-400 border bg-space-500 shadow-card duration-300 md:hover:scale-[1.03] overflow-hidden md:basis-[30vw] 2xl:basis-[20vw]'
        >
                    <Image src={project.image} className='w-full aspect-video object-cover object-centerborder-b border-space-400'/>
                    <div className='grow py-4 px-4 md:px-8 flex flex-col gap-y-2 md:gap-y-4'>
                        <p className="text-sm text-space-100">{formatDate(project.date)}</p>
                        <Caption themeColor={themeColor} className='text-lg md:text-xl mb-0'>
                            {project.name}
                        </Caption>
                        <Paragraph className='max-w-full'>
                            {project.description}
                        </Paragraph>
                        <SkillsList skills={project.skills}/>
                    </div>
        </Link>
    );
}

export default ProjectCard;