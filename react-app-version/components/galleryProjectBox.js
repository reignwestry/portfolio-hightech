//GalleryProjectBox
import Link from "next/link";
import ShowcaseBackgroundImg from "./../imgs/backgrounds/showcaseBackgroundImg.png";
import dumbyImg from "./../imgs/showcase/dumby-img.jpg";
export default function GalleryProjectBox() {
        const project = {
          name: "Project Name",
          image: dumbyImg.src,
          type: "website",
          tech: "HTML, CSS, JavaScript, etc",
          webAddress: "./projects/",
          github: "github link",
        };
  return (
    <Link href={project.webAddress} passHref>
      <div
        className={styles.projectBoxShadow}
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className={styles.projectBox}>
          <div className={styles.projectData}>
            <div className={styles.projectBasicData}>
              <h2>{project.name}</h2>
              <span>{project.type}</span>
            </div>
            <div className={styles.projectTechData}>
              <h4>Technologies</h4>
              <p className={styles.techTypes}>{project.tech}</p>
              <span className={styles.gLink}>
                {/* <Link href={project.githubLink}>Github</Link> */}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
