import styles from './Formulario.module.css';

const Formulario = (props) => {

    const { onSubmit, children } = props;

    return(
        <section className={ styles.formulario }>
            <form onSubmit={ onSubmit }>
                { children }
            </form>
        </section>        
    );
}

export default Formulario;