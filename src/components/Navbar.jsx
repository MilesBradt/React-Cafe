import React from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import styles from "../css/global.css";
import navStyles from "../css/nav.css";


function Navbar(props) {
    return (
        <div id="navComponent">
            <Button id="homeButton" variant="outline-secondary" ><Link class="linkTo" to={{
                pathname: '/'
            }}>Home</Link></Button>
            <Button id="employeeButton" variant="outline-secondary"><Link class="linkTo" to={{
                pathname: '/employee'
            }}>Employee</Link></Button>
        </div>
    );
}


export default Navbar;