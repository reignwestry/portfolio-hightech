import ShowcaseBackgroundImg from './../imgs/backgrounds/showcaseBackgroundImg.png';
import dumbyImg from './../imgs/showcase/dumby-img.jpg';
import Link from 'next/link';

import styles from './../styles/index.module.scss';
//todo convert all project data to project.json and pass as a prop


    const project = {
        name: "Project Name",
        image: dumbyImg.src,
        type: "website",
        tech: "HTML, CSS, JavaScript, etc",
        link: "./projects/",
        github: "github link"
    };


export default function projectBox (){
    return (
        <Link href={project.link} passHref>
            <div className={styles.projectBoxShadow} style={{ backgroundImage: `url(${project.image})` }}>
                            
                <div className={styles.projectBox}>
                    <div className={styles.projectData}>
                        <div className={styles.projectBasicData}>
                            <h2>{project.name}</h2>
                            <span>{project.type}</span>
                        </div>
                        <div className={styles.projectTechData}>
                            <h4>Technologies</h4>
                            <p className={styles.techTypes}>{project.tech}</p>
                            <span className={styles.gLink}><Link href={project.githubLink}>Github</Link></span>
                        </div>
                    </div>             
                </div>
            </div>
        </Link>
    );
}