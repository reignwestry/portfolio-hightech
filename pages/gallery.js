//import gallery page
//Components
import HeadSection from './../components/Head';
import HeroSection from '../components/sections/HeroSection';
import GallerySection from '../components/sections/gallerySection';
import FooterSection from '../components/sections/Footer';


export default function Gallery() {
    return (
        <div>
            <HeadSection />
            <HeroSection />
            <h1>Gallery</h1>
            {/* <div className={styles.sectionHeader}>
                
                <h1>Gallery</h1>
                
            </div>
            <span>Here is a showcase of my best and latest projects</span> */}
            <GallerySection />
            <FooterSection />

        </div>
    )
}