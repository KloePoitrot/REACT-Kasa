function Collapse(){
    return(
        <article className="collapse">
            <div className="collapse-button">
                <p>Titre</p>
                <i className="fa-solid fa-chevron-up"></i>
            </div>
            <div className="collapse-content">
                <p>Contenu</p>
            </div>
        </article>
    )
}

export default Collapse