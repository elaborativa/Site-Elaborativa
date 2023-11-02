import styles from './App.module.css'
import img_grupo from './imgs/grupo.jpg'
import NavBar from './components/NavBar'
import SobreNos from './components/SobreNos'
import Produtos from './components/Produtos'
import Contatos from './components/Contatos'
import Referencias from './components/Referencias'
import Parceiros from './components/Parceiros'
import Footer from './components/Footer'

function App() {
    return (
        <div>
            <NavBar />
            <img src={img_grupo} alt="Grupo de pessoas reunidas" id={styles.imgGrupo}/>
            <SobreNos />
            <Produtos />
            <Contatos />
            <Parceiros />
            <Referencias />
            <Footer />
        </div>
    )
}

export default App