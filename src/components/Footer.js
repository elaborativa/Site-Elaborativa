import styles from './Footer.module.css'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import Button from '@mui/material/Button';

function Footer() {
    return (
        <footer>
            <div className={styles.footerContent}>
                <Button className={styles.botao} color="secondary" variant="contained" href="#">Voltar para o topo</Button>
                <div>
                    <Button className={styles.botao} color="secondary" variant="contained" href="#sobreNos">Sobre nós</Button>
                    <Button className={styles.botao} color="secondary" variant="contained" href="#produtos">Produtos</Button>
                    <Button className={styles.botao} color="secondary" variant="contained" href="#contatos">Contatos</Button>
                    <Button className={styles.botao} color="secondary" variant="contained" href="#parcerias">Parcerias</Button>
                    <Button className={styles.botao} color="secondary" variant="contained" href="#referencias">Referências</Button>
                </div>
            </div>
            <div className={styles.divCopyright}>
                <p className={styles.copyright}>Todos os direitos reservados a Elaborativa <AiOutlineCopyrightCircle id={styles.copyrightIcon} /></p>
            </div>
        </footer>
    )
}

export default Footer