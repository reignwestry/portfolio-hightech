import styles from './../../styles/index.module.scss';
import HeroBackground from './../../imgs/backgrounds/contactBackground.png';

import Form from './../contactForm/form';

export default  function contactSection(){
    return (
        <div className={styles.contactSection} style={{backgroundImage: `url(${HeroBackground.src})`}}>
            

            
            <div className={styles.titleBox}>
                <h2 className={styles.contactHeader}>Contact Me<br/><hr/></h2>
                    
            </div>
                
            
            <div className={styles.contactInfoBox}>
                <p>If you have any opportunities send me a message? </p>
                <div className={styles.contactFormBox}>
                    <Form />
                </div>
            </div>
        </div>
    )
}