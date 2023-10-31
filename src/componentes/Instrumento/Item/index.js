const Item = (props) => {

    const { imagem, alt, titulo, descricao } = props;

    return(
        <article>
            <header>
                <img src= { imagem } alt={ alt }/>
            </header>
            <section>
                <h5>{ titulo }</h5>
                <p>{ descricao }</p>
            </section>
        </article>
    );
}

export default Item;