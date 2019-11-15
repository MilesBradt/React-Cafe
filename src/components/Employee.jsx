import React from "react";
import { Link } from 'react-router-dom';
import Inventory from './Inventory'
import 'bootstrap/dist/css/bootstrap.css';
import styles from "../css/global.css";
import employeeStyles from "../css/employee.css";

function Employee() {
    return (
        <div id="employeeComponent">
            <p>Employee works</p>
            <div class="container">
                <Inventory/>
            </div>
            <Link to="/"> Return Home </Link>
        </div>
    );
}


export default Employee;