import styles from './Titulo.module.css';

const Titulo = (props) => {

    const { titulo } = props;

    return(
        <section className={ styles.titulo }>
            <h3>{ titulo }</h3>
        </section>
    );
}

export default Titulo;