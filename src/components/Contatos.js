import styles from './Contatos.module.css'
import { AiOutlineInstagram , AiOutlineYoutube } from 'react-icons/ai'
import { MdOutlineMailOutline } from 'react-icons/md'

function Contatos() {
    return (
        <div>
            <h1 id='contatos' className={styles.h1Contatos}>CONTATOS</h1>
            <div className={styles.content}>
                <div className={styles.faleConosco}>
                    <h2>FALE CONOSCO</h2>
                    {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe11DBQfaN16Twc4Tl0u92j_ZwbZGof_0qBpkAZcLX6lZ59Zw/viewform?embedded=true" width="640" height="689" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe> */}
                </div>
                <div className={styles.redesSociais}>
                    <h2 className={styles.h2RedesSociais}>NOSSAS REDES SOCIAIS</h2>
                    <div>
                        <section className={styles.sectionRedesSociais}>
                            <AiOutlineInstagram />
                            <p>Instagram</p>
                        </section>
                        <section className={styles.sectionRedesSociais}>
                            <MdOutlineMailOutline />
                            <p>Email</p>
                        </section>
                        <section className={styles.sectionRedesSociais}>
                            <AiOutlineYoutube />
                            <p>Youtube</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contatos