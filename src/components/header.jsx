import { Link, NavLink } from "react-router-dom"

function Header() {
    return(
        <header>
            <Link to="/">
                <img src="/src/assets/img/logo/LOGO.png" alt="Logo dusite" />
            </Link>
            <nav className="headerNav">
                <NavLink className="headerNav headerNav_link" to="/">Accueil</NavLink>
                <NavLink className="headerNav headerNav_link" to="/a-propos">A propos</NavLink>
            </nav>
        </header>
    )
}

export default Header