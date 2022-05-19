import styles from './../../styles/index.module.scss';
import ShowcaseBackgroundImg from './../../imgs/backgrounds/showcaseBackgroundImg.png';

import ProjectBox from './../../components/projectBox';
import dumbyImg from './../../imgs/showcase/dumby-img.jpg';
import Link from 'next/link';


// const projects = {
//     name: "Project Name",
//     image: dumbyImg.src,
//     type: "website",
//     tech: "HTML, CSS, JavaScript, etc",
//     link: "/project/path"
// }
//todo finish mobile responsive
//todo convert projectRow to a map function
export default function Showcase(props) {
    return (
        <div className={styles.showcaseSection} style={{
            backgroundImage: `url(${ShowcaseBackgroundImg.src})`
        }}>
            <div className={styles.sectionHeader}>
                
                <h1>Showcase</h1>
                
            </div>
            <span>Here is a showcase of my best and latest projects</span>
            <div className={styles.showcaseGallery}>
                <div className={styles.row}>
                    
                    <ProjectBox />
                    <ProjectBox />
                    <ProjectBox />
                    <ProjectBox />
                
                </div>
                <div className={styles.row}>
                    
                    <ProjectBox />
                    <ProjectBox />
                    <ProjectBox />
                    <ProjectBox />
                
                </div>
            </div>
            
        </div>
    );
}