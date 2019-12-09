import React from "react";
import Inventory from './Inventory'
import styles from "../css/global.css";
import employeeStyles from "../css/employee.css";
import propTypes from 'prop-types';

function Employee(props) {
    return (
        <div id="employeeComponent">
            <h1>Employee Menu</h1>
            <div class="inventoryComponent">
                {console.log("Employee is true")}
                <div class="coffeeComponent">
                    <span class="coffeeMenuText">Coffee</span>
                    {props.coffeeList.map((item, index) =>
                        <li class="itemsList" key={index}>
                            {item.type} - {item.priceSmall} / {item.priceLarge} [Amount Left: {item.amount}]
                            &nbsp; <button class="sellButton" onClick={() =>
                                props.itemSubtract(item.id)
                            }
                            >Sell</button>
                        </li>
                    )}
                </div>
                <div class="teaComponent">
                    <span class="teaMenuText">Tea</span>
                    {props.teaList.map((item, index) =>
                        <li class="itemsList" key={index}>
                            {item.type} - {item.priceSmall} / {item.priceLarge} [Amount Left: {item.amount}]
                            &nbsp; <button class="sellButton" onClick={() =>
                                props.itemSubtract(item.id)
                            }
                            >Sell</button>
                        </li>
                    )}
                </div>
            </div>
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