import styles from './Parceiros.module.css';

import sesi from '../imgs/parceiros/sesi.png';
import senai from '../imgs/parceiros/senai.png';
import sebrae from '../imgs/parceiros/Sebrae.png';
import paqtg from '../imgs/parceiros/paqtg.jpg';

function Parceiros() {
  return (
    <div>
      <h1 className={styles.h1Parceiros} id="parcerias">
        PARCERIAS
      </h1>
      <div className={styles.contentParceiros}>
        <a
          href="https://sesieducacao.com.br/publico/"
          className={styles.parceiroContainer}
        >
          <div className={styles.parceiroImagemContainer}>
            <img src={sesi} id={styles.imgSebrae} />
          </div>
        </a>
        <a
          href="https://fiepb.com.br/senai/"
          className={styles.parceiroContainer}
        >
          <div className={styles.parceiroImagemContainer}>
            <img src={senai} id={styles.imgSebrae} />
          </div>
        </a>
        <a
          href="https://sebrae.com.br/sites/PortalSebrae/"
          className={styles.parceiroContainer}
        >
          <div className={styles.parceiroImagemContainer}>
            <img src={sebrae} id={styles.imgSebrae} />
          </div>
        </a>
        <a
          href="https://www.paqtc.org.br/"
          className={styles.parceiroContainer}
        >
          <div className={styles.parceiroImagemContainer}>
            <img src={paqtg} id={styles.imgpaqtg} />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Parceiros;
