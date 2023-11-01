import styles from './NavBar.module.css'
import fonte from '../imgs/fonte.png'

function NavBar() {
    return (
        <div className={styles.navBar}>
            <div className={styles.divImgNavBar}>
                <img src={fonte} className={styles.imgNavBar} />
            </div>
            <ul className={styles.ulNavBar}>
                <li>
                    <a href='#sobreNos'>Sobre nós</a>
                </li>
                <li>
                    <a href='#produtos'>Produtos</a>
                </li>
                <li>
                    <a href='#contatos'>Contatos</a>
                </li>
                <li>
                    <a href='#referencias'>Referências</a>
                </li>
                <li>
                    <a href='#parceiros'>Parceiros</a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar