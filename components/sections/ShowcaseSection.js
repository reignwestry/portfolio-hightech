import styles from './../../styles/components/sections/Showcase.module.scss';
import ShowcaseBackgroundImg from './../../imgs/backgrounds/showcaseBackgroundImg.png';
import dumbyImg from './../../imgs/showcase/dumby-img.jpg';
import Link from 'next/link';

// const projects.image = dumbyImg.src

// const projects.image = [
//     imagePath: dumbyImg.src,
//     projectName: 'Project Name';
// ];

const projects = {
    name: "Project Name",
    image: dumbyImg.src,
    type: "website",
    tech: "HTML, CSS, JavaScript, etc",
    link: "/project/path"
}

export default function Showcase() {
    return (
        <section className={styles.showcaseSection} style={{
            backgroundImage: `url(${ShowcaseBackgroundImg.src})`
        }}>
            <div className={styles.sectionHeader}>
                
                <h1>Showcase</h1>
                <span>Here is a showcase of my best and latest projects</span>
            </div>
            <div className={styles.showcaseGallery}>
                <div className={styles.row}>
                    
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
                                        <p>{projects.tech}</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </Link>
                    
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
                                        <p>{projects.tech}</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </Link>
                    
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
                                        <p>{projects.tech}</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </Link>
                    
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
                                        <p>{projects.tech}</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </Link>
                 
                </div>
                <div className={styles.row}>
                    
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
                                        <p>{projects.tech}</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </Link>
                    
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
                                        <p>{projects.tech}</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </Link>
                    
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
                                        <p>{projects.tech}</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </Link>
                    
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
                                        <p>{projects.tech}</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </Link>
                 
                </div>
            </div>
            
        </section>
    )
}