import Image from '../UI/Image';

const ProjectDetails = ({project}) => {
    return (
        <section id='project' className='relative flex min-h-screen w-full'>
            <Image src={project.image}></Image>
        </section>
    )
}

export default ProjectDetails;