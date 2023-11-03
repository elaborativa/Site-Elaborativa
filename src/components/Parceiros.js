import styles from './Parceiros.module.css'

import lara from '../imgs/parceiros/lara.jpeg'
import sebrae from '../imgs/parceiros/Sebrae.png'
import paqtg from '../imgs/parceiros/paqtg.jpg'

function Parceiros() {
    return (
        <div>
            <h1 className={styles.h1Parceiros} id='parcerias'>PARCERIAS</h1>
            <div className={styles.contentParceiros}>
                <a href='https://www.instagram.com/lara.ifpb/' className={styles.aLara}>
                    <div className={styles.laraBranco}>
                        <img src={lara} id={styles.imgLara} />
                    </div>
                </a>
                <a href='https://sebrae.com.br/sites/PortalSebrae/' className={styles.aSebrae}>
                    <div className={styles.sebraeBranco}>
                        <img src={sebrae} id={styles.imgSebrae} />
                    </div>
                </a>
                <a href='https://www.paqtc.org.br/' className={styles.aPaqtg}>
                    <div className={styles.paqtgBranco}>
                        <img src={paqtg} id={styles.imgpaqtg} />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Parceiros