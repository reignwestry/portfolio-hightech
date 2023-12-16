//import gallery page
//Components
import HeadSection from './../components/Head';
import HeroSection from '../components/sections/HeroSection';
import GallerySection from '../components/sections/gallerySection';
import FooterSection from '../components/sections/Footer';
import './../styles/'


export default function Gallery() {
    return (
        <div>
            <HeadSection />
            <HeroSection />
            <h1>Gallery</h1>
            <GallerySection />
            <FooterSection />

        </div>
    )
}