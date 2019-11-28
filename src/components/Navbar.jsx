import React from "react";
import { Link } from 'react-router-dom';
import styles from "../css/global.css";
import navStyles from "../css/nav.css";


function Navbar(props) {
    return (
        <div id="navComponent">
            <button><Link to={{
                pathname: '/'
            }}>Home</Link></button>
            <button><Link to={{
                pathname: '/employee'
            }}>Employee</Link></button>
        </div>
    );
}


export default Navbar;