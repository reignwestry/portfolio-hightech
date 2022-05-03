import styles from '../styles/components/Header.module.scss'
import Nav from './Nav';

export default function Header() {
    return (
        <div className={styles.headerSection}>
            <h1 className={styles.headerTitle}>Reign Westry</h1>

            <Nav />
        </div>
    );
}