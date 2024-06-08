import { Link } from "react-router-dom"

function Header() {
    return(
        <header>
            <Link to="/">
                <img src="src/assets/img/logo/LOGO.png" alt="Logo dusite" />
            </Link>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/a-propos">A propos</Link></li>
            </ul>
        </header>
    )
}

export default Header