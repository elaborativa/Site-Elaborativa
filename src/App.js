import styles from './App.module.css';
import img_grupo from './imgs/grupo.jpg';
import SobreNos from './components/SobreNos';
import Produtos from './components/Produtos';
import Contatos from './components/Contatos';
import Parceiros from './components/Parceiros';
import img_lampada from './svg/LogoElaborativa.svg';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <img
        src={img_grupo}
        alt="Grupo de pessoas reunidas"
        id={styles.imgGrupo}
      />
      <div id={styles.corLampada}>
        <div id={styles.divLampada}>
          <img
            src={img_lampada}
            alt="Lampada acesa, logo da empresa"
            id={styles.lampada}
          />
        </div>
      </div>
      <SobreNos />
      <Produtos />
      <Contatos />
      <Parceiros />
    </Layout>
  );
}

export default App;
