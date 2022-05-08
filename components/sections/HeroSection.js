
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
                
                <div className={styles.contactBtnBox}>
                    <Link className={styles.contactBtn} href='/contact'>Contact Me Now</Link>
                </div>
           </div>

        </div>
    )
}