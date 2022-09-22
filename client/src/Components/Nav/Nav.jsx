import React from "react";
import { NavLink } from "react-router-dom";
import styles from './nav.module.css'

const Nav = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar_nav}>
                <li className={styles.nav_item}>
                    <NavLink className={styles.link_style} to={'/'}>Home</NavLink>
                </li>
                <li className={styles.nav_item}>
                    <NavLink className={styles.link_style} to={'/countries'}>Countries</NavLink>
                </li>
                <li className={styles.nav_item}>
                    <NavLink className={styles.link_style} to={'/activities'}>Activities</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export { Nav }