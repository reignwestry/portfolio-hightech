import ShowcaseBackgroundImg from './../imgs/backgrounds/showcaseBackgroundImg.png';
import dumbyImg from './../imgs/showcase/dumby-img.jpg';
import Link from 'next/link';

import styles from './../styles/index.module.scss';
//todo convert all project data to projects.json and pass as a prop

const projects = {
    name: "Project Name",
    image: dumbyImg.src,
    type: "website", //website, app, etc.
    tech: "HTML, CSS, JavaScript, etc",
    link: "/project/path",
    githubLink: "/github/path"
}

export default function projectBox(props) {
    return (
        <Link href={projects.link}>
            <div className={styles.projectBoxShadow} style={{ backgroundImage: `url(${projects.image})` }}>
                            
                <div className={styles.projectBox}>
                    <div className={styles.projectData}>
                        <div className={styles.projectBasicData}>
                            <h2>{projects.name}</h2>
                            <span>{projects.type}</span>  
                        </div>
                        <div className={styles.projectTechData}>
                            <h4>Technologies</h4>
                            <p className={styles.techTypes}>{projects.tech}</p>
                            <span className={styles.gLink}><Link href={projects.githubLink}>Github</Link></span>
                        </div>
                    </div>
                               
                </div>
            </div>
        </Link>
    )
}