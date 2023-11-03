import styles from './Contatos.module.css'
import { AiOutlineInstagram , AiOutlineYoutube } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import avioes from '../imgs/aviõesCompletos.png'

function Contatos() {
    return (
        <div>
            <div className={styles.divTitulo}>
                <div id={styles.divimg}>
                    <img id='contatos' className={styles.avioes} src={avioes} />
                </div>
                    <h1 className={styles.h1Contatos}>CONTATOS</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.faleConosco}>
                    <h2 className={styles.h2FaleConosco}>FALE CONOSCO</h2>
                    <form id='formFaleConosco'>
                        <label>
                            <span>Nome</span>
                            <input id="nome" type="text" name="nome" placeholder='Digite seu nome' />
                        </label>
                        <label>
                            <span>Email</span>
                            <input id="email" type="email" name="email" placeholder='Digite seu email' />
                        </label>
                        <label>
                            <span>Fale conosco</span>
                            <textarea id="texto" type="text" name="texto" rows="8" placeholder='Escreva sua mensagem' />
                        </label>
                        <button onClick={handleSubmit} type="submit">Enviar</button>
                    </form>
                </div>
                <div className={styles.redesSociais}>
                    <h2 className={styles.h2RedesSociais}>NOSSAS REDES SOCIAIS</h2>
                    <p className={styles.camuflagem}>a</p>
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

const handleSubmit = (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const texto = document.getElementById('texto').value
    
    fetch('https://api.sheetmonkey.io/form/ppCsZ9gJ6QwWLp1ajbLSLP', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, texto })

    });
}

export default Contatos