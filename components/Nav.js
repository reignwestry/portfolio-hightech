

import { faBorderNone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

import { useState } from 'react';

import styles from './../styles/index.module.scss'


export default function Nav() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <nav className={styles.mainNav}>
            <button
                className={styles.hamburger}
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                    console.log(setIsNavExpanded);
                }}>
                {/* icon from heroicons.com */}
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="white"
                >
                <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                />
                </svg>
            </button>
            <div className={isNavExpanded ? styles.navMenuExpanded : styles.navMenu}>
                <ul>
                    <li><Link className={styles.navLink} href='/'>Home</Link></li>
                    <li><Link className={styles.navLink} href='/gallery'>Gallery</Link></li>
                    <li><Link className={styles.navLink} href='/about'>About</Link></li>
                    <li><Link className={styles.navLink} href='/resume'>Resume</Link></li>
                    <li><Link className={styles.navLink} href='/contact'>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}
