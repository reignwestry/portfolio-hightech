
import styles from './../../styles/components/sections/About.module.scss';   
import HeroBackground from './../../imgs/backgrounds/heroBackgroundImage.png';

// import FontAwesome from './FontAwesomeLibrary';

export default function About() {
    return (
        <section className={styles.aboutSection}  style={{
            backgroundImage: `url(${HeroBackground.src})`}}>
            <h1>About</h1>

            <div className={styles.aboutMessage}>
                <p>Hi, I am a Atlanta based <span className={styles.keywordOne}> full-stack</span> developer that loves to solve problems with creative ideas.</p>
                <p>If you need something designed and developed please don't hesitate to contact me.</p>
                <p>I would love to work with you.</p>
                <p> My full-stack technology knowledge consists of:</p>
                {/* <FontAwesome /> */}
                <div className={styles.knowledgePathBox}>
                    <div className={styles.knowledgePathColumn}>
                        <ul>
                            <li className={styles.listTitle}><h4>Web Development</h4></li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>CSS Flexbox</li>
                            <li>SCSS</li>
                            <li>JavaScript</li>
                            <li>MySQL & PHP</li>
                            <li>MERN Stack</li>
                            <li>Reactjs</li>
                        </ul>
                    </div>
                    <div className={styles.knowledgePathColumn}>
                        <ul>
                            <li className={styles.listTitle}><h4>Design</h4></li>
                            <li>Mobile First</li>
                            <li>Responsive Design</li>
                        </ul>
                    </div>
                    <div className={styles.knowledgePathColumn}>
                        <ul>
                            <li className={styles.listTitle}><h4>Android Development</h4></li>
                            <li>Java</li>
                            <li>Flutter</li>
                            <li>Kotlin</li>
                        </ul>
                    </div>
                    <div className={styles.knowledgePathColumn}>
                        <ul className={styles.toolsList}>
                            <li className={styles.listTitle}><h4>Tools</h4></li>
                            <li>VSCode</li>
                            <li>Adobe PhotoShop</li>
                            <li>Adobe Illustrator</li>
                            <li>Jetbrains Intellij</li>
                            <li>Chrome</li>
                            <li>Firefox</li>
                            <li>Nodejs</li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    )
}