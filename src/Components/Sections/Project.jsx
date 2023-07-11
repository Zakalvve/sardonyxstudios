import Image from '../UI/Image';
import Container from '../UI/Container'
import { icons } from '../../Assets/assets';
import { Heading, Date, Paragraph, Caption} from '../UI/Text';
import ProjectCards from '../ProjectCards'
import { projectsData } from '../../Data/data';
import { shuffleArray } from '../../Library/Utils';
import Pill from '../UI/Pill';
import { useNavigate } from 'react-router-dom';

const Project = ({project}) => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    const otherProjects = shuffleArray(projectsData.filter(projectData => projectData.name !== project.name)).slice(0,2);

    return (
        <>
            <section id='project' className='relative py-[10vh] flex min-h-screen w-full bg-space-600 after:absolute after:inset-0 after:h-full after:bg-gradient-to-t after:from-space-600 after:via-black/80 after:to-black/70'>
                <Image src={project.image} className='absolute inset-0 w-full h-full object-cover object-center'/>
                <Container>
                    <div className='relative z-10 flex h-full flex-col justify-end gap-4'>
                        <Date date={project.date} />
                        <Heading className='mb-0'>{project.name}</Heading>
                        <div className='flex flex-row gap-2 flex-wrap'>
                            {project.skills.map((skill, i) => (
                                <Pill key={i} className='bg-neon-green text-space-500'>{skill}</Pill>
                            ))}
                        </div>
                        <button onClick={handleBack} className='mt-4 flex items-center hover:opacity-80 focus-visible:opacity-80 transition-opacity group'>
                            <icons.BackArrow className='mr-2 h-12 w-12 transition-transform duration-300 group-hover:-translate-x-1 group-focus-visible:-translate-x-1 lg:h-7 lg:w-7"'/>
                            Go Back
                        </button>
                    </div>
                </Container>
            </section>
            <section className='pt-8 bg-space-600'>
                <Container>
                    <Caption></Caption>
                    <Paragraph className='w-full'>{project.description}</Paragraph>
                    <div id='links' className='pt-12 flex flex-col gap-2'>
                        {project.github && (
                            <a href={project.github} className='text-neon-blue hover:underline'>Check out this project on Github</a>
                        )}
                        {project.site && (
                            <a href={project.site} className='text-neon-blue hover:underline'>View project live</a>
                        )}
                    </div>
                </Container>
            </section>
            <section className='py-20 bg-space-600'>
                <Container>
                    <div className='flex flex-col items-center text-center'>
                        <Caption themeColor='neon-red' className='mb-8'>Other Projects</Caption>
                        <ProjectCards projects={otherProjects}/>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Project;