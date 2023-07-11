import { icons } from "../Assets/assets"
import { shuffleArray } from '../Library/Utils'

const SkillsList = ({skills}) => {
    console.log(skills);
    const skillsIcons = icons.SkillsIcons.filter(skill => skills.find(skillString => skillString.toLowerCase() === skill.name)).map(skill => skill.icon);

    return (
        <div className='flex gap-x-3'>
            {shuffleArray(skillsIcons).map((Icon, i) => (
                <Icon key={i} className='h-8 w-8'/>
            ))}
        </div>
    )
}

export default SkillsList;