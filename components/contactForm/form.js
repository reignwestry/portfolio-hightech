import styles from './../../styles/index.module.scss';

export default function contactForm() {
    return (
        <form className={styles.contactForm}>
            <div className={styles.dataBox}>
                <fieldset>
                    <label htmlFor="fname">First Name</label><br />
                    <input type="text" id="fname" name="fname" placeholder="Jane"></input>
                </fieldset>

                <fieldset>
                    <label htmlFor="lname">Last Name</label><br />
                    <input type="text" id="lname" name="lname" placeholder="Smoe"></input>
                </fieldset>
                
            </div>

            <div className={styles.dataBox}>
                <fieldset className={styles.emailBox}>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" id="email" name="email" placeholder="12345@youremail.com"></input>
                </fieldset>
            </div>

            <div className={styles.dataBox}>
                <fieldset>
                    <p>How can I help you?</p>
                    <select>
                        <option className={styles.optionsItem}>Consultation</option>
                        <option className={styles.optionsItem}>Website</option>
                        <option className={styles.optionsItem}>App</option>
                        <option className={styles.optionsItem}>Repair</option>
                    </select>
                </fieldset>
            </div>

            <div className={styles.msgBox}>
                <textarea className={styles.contactMsgBox} placeholder='What would you like me to create and how soon do you need it done? What is the best way to contact you? '></textarea><br/>
            </div>

            <div className={styles.btnContainer}>
                <button className={styles.formBtn}>SEND</button>
            </div>
        </form>
    )
}