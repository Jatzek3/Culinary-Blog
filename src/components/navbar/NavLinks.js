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
                <Link to="/"
                    className={navLinkText}
                    activeStyle={{ borderRight: "1rem", borderBottom: "4px solid black" }}>
                    HOME
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/about" className={navLinkText}
                    activeStyle={{ borderRight: "1rem", borderBottom: "4px solid black" }}>
                    ABOUT
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/blog" className={navLinkText}
                    activeStyle={{ borderRight: "1rem", borderBottom: "4px solid black" }}>
                    BLOG
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/apps" className={navLinkText}
                    activeStyle={{ borderRight: "1rem", borderBottom: "4px solid black" }}>
                    APPS
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/way" className={navLinkText}
                    activeStyle={{ borderRight: "1rem", borderBottom: "4px solid black" }}>
                    ROAD
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/map" className={navLinkText}
                    activeStyle={{ borderRight: "1rem", borderBottom: "4px solid black" }}>
                    MAP
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/contact" className={navLinkText}
                    activeStyle={{ borderRight: "1rem", borderBottom: "4px solid black" }}>
                    CONTACT
                </Link>
            </li>
        </ul>
    )
}
export default NavLinks;