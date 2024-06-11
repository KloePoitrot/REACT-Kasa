import { useState } from "react"

function Collapse(props){
    const [isCollapsed, setIsCollapsed] = useState(false)

    const handleClick = () => {
        setIsCollapsed(!isCollapsed)
        console.log(isCollapsed)
    }

    return(
        <article className="collapse">
            <button className="collapse-button" onClick={handleClick}>
                <p>{props.title}</p>
                <i className={isCollapsed ? "fa-solid fa-chevron-up collapse-active" : "fa-solid fa-chevron-up collapse-inactive" }></i>
            </button>
            <div className={isCollapsed ? "collapse-content collapse-show" : "collapse-content collapse-hidden"}>
                {props.children}
            </div>
        </article>
    )
}

export default Collapse