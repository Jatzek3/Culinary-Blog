import NavLinks from "./NavLinks.js";
import { navigation } from "./navBar.module.css"
import React from "react";

const Navigation = () => {
    return (
        <nav className={navigation}>
            <NavLinks />
        </nav>

    );
}

export default Navigation;