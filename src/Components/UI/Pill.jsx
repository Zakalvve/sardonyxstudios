import { reduceClasses } from "../../Library/Utils"
const Pill = ({className, children, ...props}) => {
    return (
        <div
            className={reduceClasses('rounded-full px-4 py-2 font-bold', className)}
        >
            {children}
        </div>
    )
}

export default Pill;