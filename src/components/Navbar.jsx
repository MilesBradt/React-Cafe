import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import styles from "../css/global.css";
import navStyles from "../css/nav.css";


function Navbar() {
    return (
        <div id="navComponent">
            <button><Link to={{
                pathname: '/employee'
            }}> Employee Link </Link> </button>
        </div>
    );
}


export default Navbar;