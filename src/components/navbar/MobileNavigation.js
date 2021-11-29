import NavLinks from "./NavLinks.js";
import React from "react";
import { useState } from "react";
import {
    mobileNavigation,
    hamburger
} from "./navBar.module.css"
import { VscMenu, VscChromeClose } from "react-icons/vsc"

const MobileNavigation = () => {

    const [open, setOpen] = useState(false)
    const hamburgerIcon = <VscMenu
        className={hamburger}
        onClick={() => setOpen(!open)}
        size='40px' color='black' />

    const closedIcon = <VscChromeClose
        className={hamburger}
        onClick={() => setOpen(!open)}
        size='40px' color='black' />

    return (
        <nav className={mobileNavigation}>
            {open ? closedIcon : hamburgerIcon}
            {open && < NavLinks />}
        </nav>
    );
}

export default MobileNavigation;