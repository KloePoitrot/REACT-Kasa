import Footer from "../components/footer"
import Header from "../components/header"
import { useParams } from "react-router-dom"
import data from '../data/logements.json'
import ErrorPage from "./error"
import Rating from "../components/rating"
import Collapse from "../components/collapse"

function FicheLogement () {
    const { id }  = useParams()
    const logData = data.find(el => el.id === id)

    if(logData !== undefined){
        return(
            <>
                <Header />
                    <main>
                        <div>{logData.title}</div>
                        <div>{logData.description}</div>
                        <div>{logData.host.name}</div>
                        <div>{logData.rating}</div>
                        <Rating value={logData.rating}/>
                        <div>{logData.equipments}</div>
                        <div>{logData.tags}</div>
                        <Collapse />
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