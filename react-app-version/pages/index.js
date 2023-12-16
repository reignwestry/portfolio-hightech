
import Image from 'next/image'
import styles from '../styles/index.module.scss'

//Components
import HeadSection from './../components/Head';
import HeroSection from '../components/sections/HeroSection';
import ShowcaseSection from '../components/sections/ShowcaseSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from './../components/sections/ContactSection';
import FooterSection from '../components/sections/Footer';

export default function Home() {
  return (

    <div className={styles.container}>
      <HeadSection />
      <HeroSection />
      <ShowcaseSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}
