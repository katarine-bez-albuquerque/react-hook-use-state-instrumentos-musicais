import styles from './Header.module.css';


const Header = (props) => {

    const { descricao } = props;

    return(
        <header className={ styles.header }>
            <h1>{ descricao }</h1>
        </header>
    );
}

export default Header;