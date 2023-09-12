import Image from '../UI/Image';
import Container from '../UI/Container'
import { icons } from '../../Assets/assets';
import { Heading, Date, Caption} from '../UI/Text';
import Projects from './Projects';
import { projectsData } from '../../Data/data';
import { shuffleArray } from '../../Library/Utils';
import Pill from '../UI/Pill';
import { useNavigate } from 'react-router-dom';
import Picture from '../UI/Picture';
import UnityGameEmbed from '../UnityGameEmbed';
import GamePlayer from '../GamePlayer';

const Project = ({project}) => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    const otherProjects = shuffleArray(projectsData.filter(projectData => projectData.name !== project.name)).slice(0,2);

    return (
        <>
            <section id='hero' className='relative py-[10vh] flex min-h-screen w-full bg-space-600 after:absolute after:inset-0 after:h-full after:bg-gradient-to-t after:from-space-600 after:via-black/60 after:to-black/10'>
                <Picture sources={[...project.image.sources.portrait, ...project.image.sources.landscape]}>
                    <Image {...project.image.img} className='absolute inset-0 w-full h-full object-cover object-top'/>
                </Picture>
                <Container>
                    <div className='relative z-10 flex h-full flex-col justify-end gap-4'>
                        <Date className='text-white' date={project.date} />
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
            <section id='details' className='lg:pt-8 bg-space-600'>
                <Container>
                    <project.CardDescription className='flex flex-col gap-4 mb-7 lg:mb-12' />

                    <div className='flex flex-col w-full pt-8 gap-10 lg:gap-20'>
                        {project.bodySections && project.bodySections.map((section, i) => {
                            const display = i % 2 === 0 ? 'lg:flex lg:flex-row' : 'lg:flex lg:flex-row-reverse';
                            return (
                                <div key={i} className={`${display} flex flex-col lg:min-h-[30vh] lg:items-center gap-10`}>
                                    <div className='flex flex-col lg:max-w-[50%] text-center lg:text-left'>
                                        <Caption themeColor={'neon-blue'}>{section.title}</Caption>
                                        <section.Body />
                                    </div>
                                    {section.image && (
                                        <Picture className='lg:w-[50%]' sources={section.image.sources}>
                                            <Image className='inset-0 w-full lg:w-full object-cover object-top mx-auto aspect-video rounded-lg' {...section.image.img}/>
                                        </Picture>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {project.demo && (
                        <div className='w-full flex flex-col w-full pt-8 gap-10 text-center lg:gap-8 mt-16'>
                            <Caption themeColor={'neon-blue'}>{project.demo.title}</Caption>
                            <GamePlayer config={project.demo.config}/>
                        </div>
                    )}

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
            <Projects themeColor='neon-red' projects={otherProjects}/>
        </>
    )
}

export default Project;