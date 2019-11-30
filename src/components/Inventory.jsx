import React, { useState } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import styles from "../css/global.css";
import inventoryStyles from '../css/inventory.css';
import propTypes from 'prop-types';

function Inventory(props) {

    if (props.employee) {
        return (
            <div id="inventoryComponent">
                {console.log("Employee is true")}
                <div class="coffeeComponent">
                    <h1>Coffee</h1>
                    {props.coffeeList.map((item, index) =>
                        <li class="itemsList" key={index}>
                            {item.brand}: {item.name} - ${item.price} [{item.amount} cups]
                            &nbsp; <button class="sellButton" onClick={() =>
                                props.itemSubtract(item.id)
                            }
                            >Sell</button>
                        </li>
                    )}
                </div>
            </div>
        )
    } else {
        return (
            <div id="inventoryComponent">
                <div class="coffeeComponent">
                    <h1>Coffee</h1>
                    {console.log(props.coffeeList)}
                    {console.log("Employee is false")}
                    {props.coffeeList.map((item, index) =>
                        <li class="itemsList" key={index}>
                            {item.brand}: {item.name} - ${item.price}
                        </li>
                    )}
                </div>
            </div>
        )
    }
}

Inventory.propTypes = {
    coffeeList: propTypes.array,
    employee: propTypes.bool,
    itemSubtract: propTypes.func
}

export default Inventory;