import React from 'react';
import { Link } from "gatsby"
import {
    navLinks,
    navLinkItem,
    navLinkText,
} from './navBar.module.css'

const NavLinks = () => {
    return (
        <ul className={navLinks}>
            <li className={navLinkItem}>
                <Link to="/" className={navLinkText}>
                    HOME
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/about" className={navLinkText}>
                    ABOUT
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/blog" className={navLinkText}>
                    BLOG
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/apps" className={navLinkText}>
                    APPS
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/way" className={navLinkText}>
                    ROAD
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/map" className={navLinkText}>
                    MAP
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/contact" className={navLinkText}>
                    CONTACT
                </Link>
            </li>
        </ul>
    )
}
export default NavLinks;