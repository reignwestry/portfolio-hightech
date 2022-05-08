
//Components
import HeadSection from './../components/Head';
import HeroSection from '../components/sections/HeroSection';
import ShowcaseSection from '../components/sections/ShowcaseSection';
import AboutSection from '../components/sections/AboutSection';
import FooterSection from '../components/sections/Footer';

import styles from './../styles/pages/ResumePage.module.scss'

export default function Resume() {
    return (
        <div className={styles.resumePage}>
            <HeadSection />
            <HeroSection />
            <ShowcaseSection />
            <AboutSection />
            <FooterSection />

        </div>
    )
}