import React from "react";
import Image from "./UI/Image";
import { Caption, Paragraph } from "./UI/Text";

const ProjectCard = ({themeColor}) => {

    return (
        <div className='transition-all duration-300 bg-space-500 border border-space-400 rounded-xl shadow-card relative lg:aspect-[9/16] lg:h-[max(80vmin,25rem)] lg:h-[max(80vmin,25rem)] overflow-hidden flex lg:flex-col hover:scale-105'>
            <Image src="https://dummyimage.com/300x300/cfcfcf/000000" className='h-full lg:h-1/2 w-1/2 lg:w-full object-cover object-center border-b border-space-500'/>
            <div className='my-auto lg:my-0 grow p-6'>
                <Caption themeColor={{theme: themeColor, color: 'green'}} className='text-lg md:text-xl'>
                    Project
                </Caption>
                <Paragraph>
                    Project information. Quick overview of the project goes here.
                </Paragraph>
            </div>
        </div>
    );
}

export default ProjectCard;