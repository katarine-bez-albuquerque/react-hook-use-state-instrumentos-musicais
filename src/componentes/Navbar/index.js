import { ImagensGlobais } from "componentes/ImagensGlobais";
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={ styles.navbar }>
            <img src={ ImagensGlobais.logo } alt="Logo" />
            <ul>
                <li>
                    <a target="_blank" href="https://www.linkedin.com/in/katarine-albuquerque/" rel="noreferrer">
                        <img src={ ImagensGlobais.linkedin } alt="Linkedin" />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://github.com/katarineBAlbuquerque" rel="noreferrer">
                        <img src={ ImagensGlobais.github } alt="Github" />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;