import Link from 'next/link';

import styles from './../styles/components/Nav.module.scss'


export default function Nav() {
    return (
        <nav className={styles.mainNav}>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/gallery'>Gallery</Link></li>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/resume'>Resume</Link></li>
                <li><Link href='/contact'>Contact</Link></li>
            </ul>
        </nav>
    );
}