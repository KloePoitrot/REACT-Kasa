function Rating(props) {
    switch (props.value){
        case "0":
            return(
                
                <div class="rate">
                    <p>Test</p>
                    <i class="fa-solid fa-star rate-inactive"></i>
                    <i class="fa-solid fa-star rate-inactive"></i>
                    <i class="fa-solid fa-star rate-inactive"></i>
                    <i class="fa-solid fa-star rate-inactive"></i>
                    <i class="fa-solid fa-star rate-inactive"></i>
                </div>
            )
            break;
        case "1":
            return(
                <div class="rate">
                    <p>Test</p>
                    <i class="fa-solid fa-star rate-active"></i>
                    <i class="fa-solid fa-star rate-inactive"></i>
                    <i class="fa-solid fa-star rate-inactive"></i>
                    <i class="fa-solid fa-star rate-inactive"></i>
                    <i class="fa-solid fa-star rate-inactive"></i>
                </div>
            )
            break;
        case "2":
            return(
                <div class="rate">
                    <p>Test</p>
                    <i class="fa-solid fa-star rate-active"></i>
                    <i class="fa-solid fa-star rate-active"></i>
                    <i class="fa-solid fa-star rate-inactive"></i>
                    <i class="fa-solid fa-star rate-inactive"></i>
                    <i class="fa-solid fa-star rate-inactive"></i>
                </div>
            )
            break;
        case "3":
            return(
                <div class="rate">
                    <p>Test</p>
                    <i class="fa-solid fa-star rate-active"></i>
                    <i class="fa-solid fa-star rate-active"></i>
                    <i class="fa-solid fa-star rate-active"></i>
                    <i class="fa-solid fa-star rate-inactive"></i>
                    <i class="fa-solid fa-star rate-inactive"></i>
                </div>
            )
            break;
        case "4":
            return(
                <div class="rate">
                    <p>Test</p>
                    <i class="fa-solid fa-star rate-active"></i>
                    <i class="fa-solid fa-star rate-active"></i>
                    <i class="fa-solid fa-star rate-active"></i>
                    <i class="fa-solid fa-star rate-active"></i>
                    <i class="fa-solid fa-star rate-inactive"></i>
                </div>
            )
            break;
        case "5":
            return(
                <div class="rate">
                    <p>Test</p>
                    <i class="fa-solid fa-star rate-active"></i>
                    <i class="fa-solid fa-star rate-active"></i>
                    <i class="fa-solid fa-star rate-active"></i>
                    <i class="fa-solid fa-star rate-active"></i>
                    <i class="fa-solid fa-star rate-active"></i>
                </div>
            )
            break;
        default: 
        return(
            <div class="rate">
                <p>Evaluation invalide</p>
            </div>
        )
    }
}

export default Rating