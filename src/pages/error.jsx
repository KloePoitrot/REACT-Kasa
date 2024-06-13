import { Link } from "react-router-dom"
import Footer from "../components/footer"
import Header from "../components/header"

function ErrorPage() {
    return (
        <>
            <Header />
            <main className="Error">
                <h1 className="Error-title">404</h1>
                <p className="Error-text">Oups! La page que vous demandez n'existe pas.</p>
                <Link className="Error-link" to="/">Retourner sur la page d'accueil</Link>
            </main>
            <Footer />
        </>
    )
}

export default ErrorPage