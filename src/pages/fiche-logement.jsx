import Footer from "../components/footer"
import Header from "../components/header"
import { useParams } from "react-router-dom"
import data from '../data/logements.json'

function FicheLogement () {
    const { id }  = useParams()
    const logData = data.find(el => el.id === id)

    return (
        <>
            <Header />
            <main>
                <div>{logData.title}</div>
                <div>{logData.description}</div>
                <div>{logData.host.name}</div>
                <div>{logData.rating}</div>
                <div>{logData.equipments}</div>
                <div>{logData.tags}</div>
            </main>
            <Footer />
        </>
    )
}

export default FicheLogement