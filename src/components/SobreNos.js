import styles from './SobreNos.module.css'
import logoDark from '../imgs/logo_preta.jpg'
import pessoalElaborativa from '../imgs/pessoalDaElaborativa.png'
import exemplo from '../imgs/exemplo.jpg'
import aviões from '../imgs/aviões.png'

function SobreNos() {
    return (
        <div className={styles.divSobreNos}>
            <h1 id='sobreNos' className={styles.h1sobreNos}>SOBRE NÓS</h1>
            <div className={styles.content}>
                <div className={styles.divTextoLogo}>
                    <p className={styles.pDiv}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quos ea, voluptates quia maiores animi possimus facere officia sequi tempore earum, cupiditate nemo inventore architecto. Corporis et inventore veniam neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quos ea, voluptates quia maiores animi possimusLorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quos ea, voluptates quia maiores animi possimus facere officia sequi tempore earum, cupiditate nemo inventore architecto.</p>
                    <img src={logoDark} id={styles.logoDark} />
                </div>
                <div className={styles.divVideo}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/sn-e-X6RPeA?si=FVYOFvbKw3C0a7Kb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <div className={styles.historiaIntegrantes}>
                <div className={styles.historia}>
                    <h1 id={styles.h1Historia}>Nossa história</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quos ea, voluptates quia maiores animi possimus facere officia sequi tempore earum, cupiditate nemo inventore architecto. Corporis et inventore veniam neque.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quos ea, voluptates quia maiores animi possimus facere officia sequi tempore earum, cupiditate nemo inventore architecto. Corporis et inventore veniam neque.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quos ea, voluptates quia maiores animi possimus facere officia sequi tempore earum, cupiditate nemo inventore architecto. Corporis et inventore veniam neque.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quos ea, voluptates quia maiores animi possimus facere officia sequi tempore earum, cupiditate nemo inventore architecto. Corporis et inventore veniam neque.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quos ea, voluptates quia maiores animi possimus facere officia sequi tempore earum, cupiditate nemo inventore architecto. Corporis et inventore veniam neque.</p>
                    <img src={pessoalElaborativa} className={styles.imgGrupo} />
                </div>
                <img src={aviões}></img>
                <div className={styles.divTitulo}>
                    <h1 id={styles.h1Integrantes}>NOSSOS INTEGRANTES</h1>
                    <div id={styles.linha}>a</div>
                </div>
                <div className={styles.integrantes}>
                    <section className={styles.sectionSobreNos}>
                        <img src={exemplo} className={styles.imgsIntegrantes} />
                        <h3>NOME SOBRENOME</h3>
                        <p className={styles.textSession}>fundador</p>
                    </section>
                    <section className={styles.sectionSobreNos}>
                        <img src={exemplo} className={styles.imgsIntegrantes} />
                        <h3>NOME SOBRENOME</h3>
                        <p className={styles.textSession}>fundador</p>
                    </section>
                    <section className={styles.sectionSobreNos}>
                        <img src={exemplo} className={styles.imgsIntegrantes} />
                        <h3>NOME SOBRENOME</h3>
                        <p className={styles.textSession}>fundador</p>
                    </section>
                    <section className={styles.sectionSobreNos}>
                        <img src={exemplo} className={styles.imgsIntegrantes} />
                        <h3>NOME SOBRENOME</h3>
                        <p className={styles.textSession}>fundador</p>
                    </section>
                    <section className={styles.sectionSobreNos}>
                        <img src={exemplo} className={styles.imgsIntegrantes} />
                        <h3>NOME SOBRENOME</h3>
                        <p className={styles.textSession}>fundador</p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default SobreNos;