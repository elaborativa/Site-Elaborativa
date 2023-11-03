import styles from './SobreNos.module.css'
import logoDark from '../imgs/logo_preta.jpg'
import pessoalElaborativa from '../imgs/fotoNossahistoria.jpeg'

import neto from '../imgs/membros/neto.jpg'
import marcus from '../imgs/membros/marcus.jpg'
import carla from '../imgs/membros/carla2.jpg'
import laura from '../imgs/membros/laura.jpg'

function SobreNos() {
    return (

        <div className={styles.divSobreNos}>
            <h1 id='sobreNos' className={styles.h1sobreNos}>SOBRE NÓS</h1>
            <div className={styles.content}>
                <div className={styles.divTextoLogo}>
                    <p className={styles.pDiv}>Seja muito bem-vindo à nossa startup! Estamos aqui para proporcionar aos professores que trabalham no Ensino Básico uma formação contínua em Metodologias Ativas, Educação Empreendedora e Tecnologias Digitais. Com base em sólidos conhecimentos em neurociência, nossa equipe está pronta para ajudá-lo a criar estratégias que não apenas capacitam você a ensinar de maneira mais eficaz, mas também capacita seus alunos a aprenderem de forma autônoma. Através de um método especializado, mostramos como o cérebro humano aprende mais facilmente. Ao longo de todo o ano letivo, oferecemos uma série de palestras inspiradoras e workshops envolventes, que podem ser acessados tanto de forma remota quanto presencial, para enriquecer a sua prática pedagógica.</p>
                    <img src={logoDark} id={styles.logoDark} />
                </div>
                <div className={styles.divVideo}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/sn-e-X6RPeA?si=FVYOFvbKw3C0a7Kb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <div className={styles.historiaIntegrantes}>
                <div className={styles.historia}>
                    <h1 id={styles.h1Historia}>Nossa história</h1>
                    <p className={styles.pNossaHistoria}>Tudo começou com uma viagem à Finlândia em 2017, quando a professora Carla Régis passou um mês lá pelo programa Gira Mundo. Essa experiência despertou uma curiosidade incrível nela em relação ao sistema de educação finlandês e como ele difere do sistema educacional brasileiro. Carla notou que na Finlândia foram usados ​​métodos ativos de ensino.</p>
                    <p className={styles.pNossaHistoria}>Ao retornar, ela decidiu colocar em prática o que havia vivenciado, dando origem à ELABORATIVA. Essa iniciativa aconteceu na cidade em que Morava, Campina Grande - PB, um local com um ambiente educacional sólido e inovador.</p>
                    <p className={styles.pNossaHistoria}>Hoje em dia, a ELABORATIVA evoluiu de forma notável. A startup cresceu e se desenvolveu. Uma das maiores conquistas recentes foi a participação no programa CatalisaGov, em parceria com o Sebrae. É uma honra destacar que a ELABORATIVA foi a primeira e até agora única startup paraibana a ser selecionada para esse programa.</p>
                    <img src={pessoalElaborativa} className={styles.imgGrupo} />
                </div>
                <div className={styles.divTitulo}>
                    <h1 id={styles.h1Integrantes}>NOSSA EQUIPE</h1>
                    <div id={styles.linha}>a</div>
                </div>
                <div className={styles.integrantes}>
                    <section className={styles.sectionSobreNos}>
                        <img src={carla} className={styles.imgsIntegrantes} />
                        <h3>Carla Régis</h3>
                        <p className={styles.textSession}>CEO</p>
                    </section>
                    <section className={styles.sectionSobreNos}>
                        <img src={neto} className={styles.imgsIntegrantes} />
                        <h3>Inácio Neto</h3>
                        <p className={styles.textSession}>CFO</p>
                    </section>
                    <section className={styles.sectionSobreNos}>
                        <img src={laura} className={styles.imgsIntegrantes} />
                        <h3>Laura Dourado</h3>
                        <p className={styles.textSession}>Pesquisadora</p>
                    </section>
                    <section className={styles.sectionSobreNos}>
                        <img src={marcus} className={styles.imgsIntegrantes} />
                        <h3>Marcus Régis</h3>
                        <p className={styles.textSession}>CTO</p>
                    </section>
                </div>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" id={styles.onda}>
                    <path fill="#ffffff" fill-opacity="1" d="M0,96L60,117.3C120,139,240,181,360,202.7C480,224,600,224,720,202.7C840,181,960,139,1080,133.3C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
                </svg>
            </div>
        </div>
    )
}

export default SobreNos;