import React from "react";
import Inventory from './Inventory'
import styles from "../css/global.css";
import employeeStyles from "../css/employee.css";
import propTypes from 'prop-types';

function Employee(props) {
    return (
        <div id="employeeComponent">
            <h1>Employee Menu</h1>
            <Inventory
                employee={props.employee}
                coffeeList={props.coffeeList}
                teaList={props.teaList}
                itemSubtract={props.itemSubtract}
            />
        </div>
    );
}

Employee.propTypes = {
    coffeeList: propTypes.array,
    teaList: propTypes.array,
    employee: propTypes.bool,
    itemSubtract: propTypes.func
}

export default Employee;