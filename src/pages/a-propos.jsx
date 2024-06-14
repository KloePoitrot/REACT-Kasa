import Banner from "../components/banner"
import Collapse from "../components/collapse"
import Footer from "../components/footer"
import Header from "../components/header"

function APropos() {
    return (
        <>
            <Header />
            <main>
                <Banner imgBanner="../src/assets/img/banners/b9995860bb6384a77ca7dc9bf52da3be.jpg"/>
                <section className="listCollapse">
                    <Collapse title="Fiabilité">
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements. et
                        toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                    </Collapse>
                    <Collapse title="Respect">
                        <p>La bienveillance fait par Lie des valeurs fonda trices de Kasa. Tout compor ternent discr iminatoire Ou de
                        perturbation du voisinage entrainera une exclusion de notre plateforme.</p>
                    </Collapse>
                    <Collapse title="Service">
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa, Tout comportement discriminatoire ou de
                        perturbation du voisinage entrainera une exclusion de notre plateforme,</p>
                    </Collapse>
                    <Collapse title="Sécurité">
                        <p>La sécurité est la priorité de Kasa. Aussi bien nos hôtes que pour les voyageurs. chaque logement correspond aux critères de sécurité établis par nos services En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectes Nous organisons également des ateliers sur la sécurité domestiq ue pour nos hôtes</p>
                    </Collapse>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default APropos