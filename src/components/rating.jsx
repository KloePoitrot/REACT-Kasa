function Rating(props) {
    switch (props.value){
        case "0":
            return(
                
                <div className="rate">
                    <i className="fa-solid fa-star rate-inactive"></i>
                    <i className="fa-solid fa-star rate-inactive"></i>
                    <i className="fa-solid fa-star rate-inactive"></i>
                    <i className="fa-solid fa-star rate-inactive"></i>
                    <i className="fa-solid fa-star rate-inactive"></i>
                </div>
            )
            break;
        case "1":
            return(
                <div className="rate">
                    <i className="fa-solid fa-star rate-active"></i>
                    <i className="fa-solid fa-star rate-inactive"></i>
                    <i className="fa-solid fa-star rate-inactive"></i>
                    <i className="fa-solid fa-star rate-inactive"></i>
                    <i className="fa-solid fa-star rate-inactive"></i>
                </div>
            )
            break;
        case "2":
            return(
                <div className="rate">
                    <i className="fa-solid fa-star rate-active"></i>
                    <i className="fa-solid fa-star rate-active"></i>
                    <i className="fa-solid fa-star rate-inactive"></i>
                    <i className="fa-solid fa-star rate-inactive"></i>
                    <i className="fa-solid fa-star rate-inactive"></i>
                </div>
            )
            break;
        case "3":
            return(
                <div className="rate">
                    <i className="fa-solid fa-star rate-active"></i>
                    <i className="fa-solid fa-star rate-active"></i>
                    <i className="fa-solid fa-star rate-active"></i>
                    <i className="fa-solid fa-star rate-inactive"></i>
                    <i className="fa-solid fa-star rate-inactive"></i>
                </div>
            )
            break;
        case "4":
            return(
                <div className="rate">
                    <i className="fa-solid fa-star rate-active"></i>
                    <i className="fa-solid fa-star rate-active"></i>
                    <i className="fa-solid fa-star rate-active"></i>
                    <i className="fa-solid fa-star rate-active"></i>
                    <i className="fa-solid fa-star rate-inactive"></i>
                </div>
            )
            break;
        case "5":
            return(
                <div className="rate">
                    <i className="fa-solid fa-star rate-active"></i>
                    <i className="fa-solid fa-star rate-active"></i>
                    <i className="fa-solid fa-star rate-active"></i>
                    <i className="fa-solid fa-star rate-active"></i>
                    <i className="fa-solid fa-star rate-active"></i>
                </div>
            )
            break;
        default: 
        return(
            <div className="rate">
                <p>Evaluation invalide</p>
            </div>
        )
    }
}

export default Rating