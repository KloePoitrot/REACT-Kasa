import { useState } from "react"

function Slideshow(props){
    const [count, setSlideImg] = useState(0)

    const isMoreOne = () => {
        if(props.images.length > 1){
            return true
        }
        if(props.images.length === 1){
            return false
        }
    }

    const slide = (target) => {
        if(target === "right"){
            if(count === props.images.length - 1){
                setSlideImg(0)
                return
            }
            setSlideImg(count + 1)
        }
        if(target === "left"){
            if(count === 0 ){
                setSlideImg(props.images.length - 1)
                return
            }
            setSlideImg(count - 1)
        }
    }
    return(
        <>
            <article className="slideShow">
                {isMoreOne() ? <div className="slideShow-btn">
                    <i className="fas fa-chevron-left btnLeft" onClick={() => slide('left')}></i>
                    <i className="fas fa-chevron-right" onClick={() => slide('right')}></i>
                </div> : null}
                
                <img src={props.images[count]} alt={props.alt} />
                {isMoreOne() ? <p className="slideShow-nav">{count + 1}/{props.images.length}</p> : null}
            </article>
        </>
    )
}

export default Slideshow