import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer>
            <Link to="/">
                <img src="src/assets/img/logo/LOGOlogo-WHITE.png" alt="Logo du site"/>
            </Link>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer