import styles from './Footer.module.css';

const Footer = (props) => {

    const { imagem, alt, criadoPor, ano } = props;

    return(
        <footer className={ styles.footer }>
            <img src={ imagem } alt={ alt } />
            <h4>{ criadoPor }</h4>
            <h5>{ ano }</h5>
        </footer>
    );
}

export default Footer;