import React from "react";
import { Link } from 'react-router-dom';
import Inventory from './Inventory'
import 'bootstrap/dist/css/bootstrap.css';
import styles from "../css/global.css";
import employeeStyles from "../css/employee.css";
import propTypes from 'prop-types';

function Employee(props) {
    return (
        <div id="employeeComponent">
            <p>Employee works</p>
            {console.log("employee stock list: " + props.stockList)}
            <div class="container">
                <Inventory
                employee={props.employee}
                stockList={props.stockList}
                itemUpdate={props.itemUpdate}
                />
            </div>
            <Link to="/"> Return Home </Link>
        </div>
    );
}

Employee.propTypes = {
    stockList: propTypes.array,
    employee: propTypes.bool,
    itemUpdate: propTypes.func
}

export default Employee;