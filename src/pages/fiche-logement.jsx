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
                    <main>
                        <Slideshow images={logData.pictures} alt={logData.title}/>
                        <div>{logData.title}</div>
                        <div>{logData.description}</div>
                        <div>{logData.host.name}</div>
                        <div>{logData.rating}</div>
                        <Rating value={logData.rating}/>
                        <div>{logData.equipments}</div>
                        <Tags tags={logData.tags}/>
                        <Collapse title="Title Test">
                            {logData.description}
                        </Collapse>
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