import styles from './Contatos.module.css'
import { AiOutlineInstagram , AiOutlineYoutube } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import avioes from '../imgs/aviõesCompletos.png'

function Contatos() {
    return (
        <div>
            <div id={styles.divimg}>
                <img id='contatos' src={avioes} />
            </div>
            <h1 className={styles.h1Contatos}>CONTATOS</h1>
            <div className={styles.content}>
                <div className={styles.faleConosco}>
                    <h2>FALE CONOSCO</h2>
                    {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe11DBQfaN16Twc4Tl0u92j_ZwbZGof_0qBpkAZcLX6lZ59Zw/viewform?embedded=true" width="640" height="689" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe> */}
                </div>
                <div className={styles.redesSociais}>
                    <h2 className={styles.h2RedesSociais}>NOSSAS REDES SOCIAIS</h2>
                    <p id={styles.camuflagem}>a</p>
                    <div className={styles.divRedes}>
                        <section className={styles.sectionRedesSociais}>
                            <a href='https://www.instagram.com/elaborativa/'>
                                <AiOutlineInstagram className={styles.icons} />
                            </a>
                        </section>
                        <section className={styles.sectionRedesSociais}>
                            <a href='https://www.youtube.com/@Elaborativa'>
                                <AiOutlineYoutube className={styles.icons} />
                            </a>
                        </section>
                        <section className={styles.sectionRedesSociais}>
                            <a href='mailto:contato@elaborativa.com'>
                                <HiOutlineMail className={styles.icons} />
                            </a>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contatos