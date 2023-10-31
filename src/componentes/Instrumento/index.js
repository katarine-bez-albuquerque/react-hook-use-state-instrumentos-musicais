import styles from './Instrumento.module.css';

const Instrumento = (props) => {

    const { children } = props;

    return(
        <aside className={ styles.instrumentos }>
            { children }
        </aside>
    );
}

export default Instrumento;