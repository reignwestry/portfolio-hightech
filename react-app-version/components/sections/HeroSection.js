
import Link from 'next/link';
import Header from '../Header';

import styles from './../../styles/index.module.scss';
import HeroBackground from './../../imgs/backgrounds/heroBackgroundImage.png';


export default function HeroSection() {

    return (
        <div className={styles.heroSection} style={{
            backgroundImage: `url(${HeroBackground.src})`}}>
            <Header />

            <div className={styles.heroMessageBox}>
                <p>Hi, I am <span className={styles.keywordOne}>Reign</span>,<br /><span className={styles.keywordTwo}>Full-Stack</span> Developer</p>
                
                <Link href='/contact' passHref>
                    <button className={styles.contactBtn} type="button">
                        <div>
                            <div className={styles.contactBtnText}>
                                Contact Me Now

                            </div>
                        </div>
                        
                    </button>

                </Link>
           </div>

        </div>
    )
}