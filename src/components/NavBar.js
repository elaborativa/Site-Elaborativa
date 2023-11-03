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
                    <a className={styles.opçao} href='#sobreNos'>Sobre nós</a>
                </li>
                <li>
                    <a className={styles.opçao} href='#produtos'>Produtos</a>
                </li>
                <li>
                    <a className={styles.opçao} href='#contatos'>Contatos</a>
                </li>
                <li>
                    <a className={styles.opçao} href='#parcerias'>Parcerias</a>
                </li>
                {/* <li>
                    <a className={styles.opçao} href='#referencias'>Referências</a>
                </li> */}
            </ul>
        </div>
    )
}

export default NavBar