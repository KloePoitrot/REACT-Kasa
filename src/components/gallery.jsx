import { Link } from 'react-router-dom'
import data from '../data/logements'

function Gallery() {
    return(
        <section className="gallery">
            {data.map(el => (
                
                <article className="gallery-logements">
                    <Link to={`/logements/${el.id}`} key={el.id}>
                        <img src={el.cover} alt={el.title} />
                        <div className="gallery-overlay">
                            <h2 className="gallery-title">{el.title}</h2>
                        </div>
                    </Link>
                </article>
            ))}
        </section>
    )
}

export default Gallery