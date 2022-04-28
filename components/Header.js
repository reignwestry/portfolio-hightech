import Nav from './Nav';
import styles from '../styles/components/Header.module.scss'

export default function Header() {
    return (
        <div className={styles.headerSection}>
            <h1>Reign Westry</h1>

            <Nav />
        </div>
    );
}