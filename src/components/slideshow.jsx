function Slideshow(props){
    return(
        <>
            <article className="slideShow">
                <div className="slideShow-btn">
                    <i className="fas fa-chevron-left btnLeft" onClick></i>
                    <i className="fas fa-chevron-right btnRight" onClick></i>
                </div>
                <img src={props.images[2]} alt={props.alt} />
                <p className="slideShow-nav">1/??</p>
            </article>
        </>
    )
}

export default Slideshow