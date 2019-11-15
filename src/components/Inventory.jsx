import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import styles from "../css/global.css";
import inventoryStyles from '../css/inventory.css';
import stock from '../assets/javascript/inventory.js'

function Inventory() {
    console.log(stock)
    return (
        <div id="inventoryComponent">
            <p>Inventory works</p>
            {stock.map((item, index) =>
                <li key={index}>
                    {item.name}, {index}
                </li>
            )}
        </div>
    );
}


export default Inventory;