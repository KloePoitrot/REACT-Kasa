function Banner(props) {
    if(props.textBanner !== undefined){
        console.log(props.imgBanner, props.textBanner)
        return (
            <div className="imgBanner">
                <img src={props.imgBanner} alt="Banner image" />
                <div className="imgBanner imgBanner_overlay">
                    <h1 className="imgBanner imgBanner_text">{props.textBanner}</h1>
                </div>
            </div>
        )
    }
    if(props.textBanner === undefined){
        return (
            <div className="imgBanner">
                <img src={props.imgBanner} alt="Banner image" />
                <div className="imgBanner imgBanner_overlay">
                </div>
            </div>
        )
    }
}

export default Banner