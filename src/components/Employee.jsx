import React from "react";
import { Link } from 'react-router-dom';
import Inventory from './Inventory'
import 'bootstrap/dist/css/bootstrap.css';
import styles from "../css/global.css";
import employeeStyles from "../css/employee.css";

function Employee(props) {
    return (
        <div id="employeeComponent">
            <p>Employee works</p>
            {console.log("employee stock list: " + props.stockList)}
            <div class="container">
                <Inventory
                employee={true}
                stockList={props.stockList}/>
            </div>
            <Link to="/"> Return Home </Link>
        </div>
    );
}


export default Employee;