import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import styles from "../css/global.css";
import headerStyles from "../css/header.css";
import headerImage from "../assets/images/coffeemug.gif"


function Header() {
    return (
        <div id="headerComponent">
            <img src={headerImage} alt=""/>
        </div>
    );
}


export default Header;