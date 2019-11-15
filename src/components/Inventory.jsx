import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import styles from "../css/global.css";
import inventoryStyles from '../css/inventory.css';
import stock from '../assets/javascript/inventory.js'

function Inventory(props) {
    console.log("inventory props: " + props.employee)
    if (props.employee) {
        return (
            <div id="inventoryComponent">
                <p>Inventory works</p>
                {stock.map((item, index) =>
                    <li key={index}>
                        {item.brand}: {item.name} ({item.alcoholContent}%) - ${item.price} [EDIT PLACEHOLDER]
                    </li>
                )}
            </div>
        )
    } else {
        return (
            <div id="inventoryComponent">
                <p>Inventory works</p>
                {stock.map((item, index) =>
                    <li key={index}>
                        {item.brand}: {item.name} ({item.alcoholContent}%) - ${item.price}
                    </li>
                )}
            </div>
        )
    }
}

export default Inventory;