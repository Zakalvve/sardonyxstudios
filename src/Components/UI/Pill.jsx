import { reduceClasses } from "../../Library/Utils"
const Pill = ({className, children, ...props}) => {
    return (
        <div
            className={reduceClasses('rounded-full text-sm px-2 py lg:text-lg lg:px-4 lg: py-2 font-bold', className)}
        >
            {children}
        </div>
    )
}

export default Pill;