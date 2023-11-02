import styles from './Produtos.module.css'
import logo from '../imgs/elaborativa.jpg'

import produto1 from '../imgs/produto1.jpg'
import produto2 from '../imgs/produto2.jpg'
import produto3 from '../imgs/produto3.jpg'

function Produtos() {
    return (
        <div>
            <div className={styles.tituloProdutos}>
                <h1 id='produtos' className={styles.h1Produtos}>PRODUTOS</h1>
                <img src={logo} id={styles.logoBranca} />
            </div>
            <div className={styles.divProduto}>
                <img src={produto1} className={styles.imgsProdutos} />
                <div className={styles.divText}>
                    <h2 className={styles.h2Produtos}>OFICINAS</h2>
                    <p className={styles.linhaProdutos}>a</p>
                    <p className={styles.textoProdutos}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quos ea, voluptates quia maiores animi possimus facere officia sequi tempore earum, cupiditate nemo inventore architecto. Corporis et inventore veniam neque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quos ea, voluptates quia maiores animi possimus facere officia sequi tempore earum, cupiditate nemo inventore architecto. Corporis et inventore veniam neque.</p>
                </div>
            </div>
            <div className={styles.divProduto}>
                <div className={styles.divText}>
                    <h2 className={styles.h2Produtos}>PALESTRAS</h2>
                    <p className={styles.linhaProdutos}>a</p>
                    <p className={styles.textoProdutos}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quos ea, voluptates quia maiores animi possimus facere officia sequi tempore earum, cupiditate nemo inventore architecto. Corporis et inventore veniam neque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quos ea, voluptates quia maiores animi possimus facere officia sequi tempore earum, cupiditate nemo inventore architecto. Corporis et inventore veniam neque.</p>
                </div>
                <img src={produto2} className={styles.imgsProdutos} id={styles.imgDireita} />
            </div>
            <div className={styles.divProduto}>
                <img src={produto3} className={styles.imgsProdutos} />
                <div className={styles.divText}>
                    <h2 className={styles.h2Produtos}>DESIGN DE APRENDIZAGEM</h2>
                    <p className={styles.linhaProdutos}>a</p>
                    <p className={styles.textoProdutos}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quos ea, voluptates quia maiores animi possimus facerew officia sequi tempore earum, cupiditate nemo inventore architecto. Corporis et inventore veniam neque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quos ea, voluptates quia maiores animi possimus facere officia sequi tempore earum, cupiditate nemo inventore architecto. Corporis et inventore veniam neque.</p>
                </div>
            </div>
        </div>
    )
}

export default Produtos