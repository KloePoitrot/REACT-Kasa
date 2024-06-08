import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer>
            <div className="footerContainer">
                <Link to="/">
                    <img src="/src/assets/img/logo/LOGO-WHITE.png" alt="Logo du site"/>
                </Link>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer