function Tags(props){
    return(
        <div className="tags">
            {props.tags.map((el, index) => (
                <div className="tag" key={index}>{el}</div>
            ))}
        </div>
    )
}

export default Tags