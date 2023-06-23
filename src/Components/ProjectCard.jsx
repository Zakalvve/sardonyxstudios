import React from "react";
import Image from "./UI/Image";
import Container from "./UI/Container";
import { Heading, Paragraph } from "./UI/Text";

const ProjectCard = ({themeColor}) => {
    return (
        <div className='transition-all duration-700 bg-space-500 border border-space-400 rounded-xl shadow-card relative aspect-[9/16] h-[max(80vmin,45rem)] lg:h-[max(40vmin,40rem)] overflow-hidden flex flex-col'>
            <Image src="https://dummyimage.com/300x300/cfcfcf/000000" className='h-1/2 w-full object-cover object-center border-b border-space-500'/>
            <div className='grow p-6'>
                <Heading className='text-2xl md:text-3xl'>
                    Project
                </Heading>
                <Paragraph>
                    Project information. Quick overview of the project goes here.
                </Paragraph>
            </div>
        </div>
    );
}

export default ProjectCard;