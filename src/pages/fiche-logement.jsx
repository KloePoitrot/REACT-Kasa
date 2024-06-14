import Footer from "../components/footer"
import Header from "../components/header"
import { useParams } from "react-router-dom"
import data from '../data/logements.json'
import ErrorPage from "./error"
import Rating from "../components/rating"
import Collapse from "../components/collapse"
import Slideshow from "../components/slideshow"
import Tags from "../components/tags"

function FicheLogement () {
    const { id }  = useParams()
    const logData = data.find(el => el.id === id)

    if(logData !== undefined){
        return(
            <>
                <Header />
                    <main className="logement">
                        <Slideshow images={logData.pictures} alt={logData.title}/>
                        <article className="logementContent">
                            <div>
                                <div className="logementTitle">
                                    <h1>{logData.title}</h1>
                                    <p>{logData.location}</p>
                                </div>
                                <div className="logementHost">
                                    <img src={logData.host.picture} alt={logData.host.name} />
                                    <p>{logData.host.name}</p>
                                </div>
                            </div>
                            <div>
                                <Tags tags={logData.tags}/>
                                <Rating value={logData.rating}/>
                            </div>
                        </article>
                        <section className="logementCollapse">
                            <Collapse title="Description">
                                {logData.description}
                            </Collapse>
                            <Collapse title="Equipements">
                                <ul>
                                    {logData.equipments.map((el, index) => (
                                        <li key={index}>{el}</li>
                                    )
                                )}
                                </ul>
                            </Collapse>
                        </section>
                    </main>
                <Footer />
            </>
        )
    } 
    if(logData === undefined){
        return (
            <ErrorPage />
        )
    }
    
    
}

export default FicheLogement