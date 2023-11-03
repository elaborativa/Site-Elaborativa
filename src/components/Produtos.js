import styles from './Produtos.module.css'
import logo from '../imgs/elaborativa.jpg'

import palestra from '../imgs/produtos/palestra2.jpg'
import workshop from '../imgs/produtos/workshop.jpg'
import design from '../imgs/produtos/designAprendizagem.jpg'
import formacao from '../imgs/produtos/formação2.jpg'

function Produtos() {
    return (
        <div>
            <div className={styles.tituloProdutos}>
                <h1 id='produtos' className={styles.h1Produtos}>PRODUTOS</h1>
                <img src={logo} id={styles.logoBranca} />
            </div>
            <div className={styles.divProduto}>
                <img src={palestra} className={styles.imgsProdutos} />
                <div className={styles.divText}>
                    <h2 className={styles.h2Produtos}>PALESTRAS TEMÁTICAS</h2>
                    <p className={styles.linhaProdutos}>a</p>
                    <p className={styles.textoProdutos}>A ELABORATIVA oferece palestras temáticas e motivadoras baseadas nas Competências para o Século XXI, enfocando as metodologias ativas, ágeis, imersivas e analíticas de ensino, soft skills (competências socioemocionais), realidade aumentada (RA) e realidade virtual (RV), atividade laboral, empreendedorismo e inovação educacional, criatividade, etc.</p>
                </div>
            </div>
            <div className={styles.divProduto}>
                <div className={styles.divText}>
                    <h2 className={styles.h2Produtos}>CAPACITAÇÃO / WORKSHOPS</h2>
                    <p className={styles.linhaProdutos}>a</p>
                    <p className={styles.textoProdutos}>Oferecemos capacitações ao corpo docente de instituições de ensino que queiram conhecer, ampliar e se atualizar no uso das metodologias ativas de ensino, RA, RV, sempre trabalhando com a “mão na massa” aplicando cada uma delas para melhorar a sua performance em sala de aula e concentrar o foco no protagonismo do aluno, mantendo o profissional atualizado, motivado e ativo para as demandas do mercado.</p>
                </div>
                <img src={workshop} className={styles.imgsProdutos} id={styles.imgDireita} />
            </div>
            <div className={styles.divProduto}>
                <img src={design} className={styles.imgsProdutos} />
                <div className={styles.divText}>
                    <h2 className={styles.h2Produtos}>DESIGN DE APRENDIZAGEM</h2>
                    <p className={styles.linhaProdutos}>a</p>
                    <p className={styles.textoProdutos}>A ELABORATIVA oferece um serviço inovador, baseado na neurociência, de atendimento personalizado e customizado a alunos que necessitam de acompanhamento para melhor gerenciar seu processo de aprendizagem. Aplicamos testes de aprendizagem, traçamos estratégias específicas, elaboramos horário de estudo funcional, disponibilizamos feedback aos pais, dentre outras atividades socioemocionais para estes alunos, otimizando o tempo de estudo e melhorando as notas e os resultados.</p>
                </div>
            </div>
            <div className={styles.divProduto}>
                <div className={styles.divText}>
                    <h2 className={styles.h2Produtos}>FORMAÇÃO CONTINUADA</h2>
                    <p className={styles.linhaProdutos}>a</p>
                    <p className={styles.textoProdutos}>A Elaborativa oferece um serviço de formação continuada inovador, combinando métodos presenciais e on-line em encontros mensais. Seu programa abrange uma ampla gama de tópicos, incluindo Metodologias Ativas, Realidade Aumentada, Realidade Virtual, Neurociência e Aprendizagem, bem como Empreendedorismo, proporcionando aos profissionais oportunidades de aprofundar seus conhecimentos em áreas essenciais. A instituição busca apoiar o crescimento e o sucesso dos participantes, permitindo-lhes atualizar suas habilidades de forma flexível e acessível, à medida que avançam em suas carreiras.</p>
                </div>
                <img src={formacao} className={styles.imgsProdutos} id={styles.imgDireita} />
            </div>
        </div>
    )
}

export default Produtos