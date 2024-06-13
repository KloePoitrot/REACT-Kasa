function Tags(props){
    return(
        <div className="tags">
            {props.tags.map(el => (
                <div className="tag">{el}</div>
            ))}
        </div>
    )
}

export default Tags