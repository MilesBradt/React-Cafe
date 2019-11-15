import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import styles from "../css/global.css";
import inventoryStyles from '../css/inventory.css';
import stock from '../assets/javascript/inventory.js'

class Inventory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: false
        };
    }
    render() { 
        console.log("inventory employee state: " + this.state.employee)
        if(this.state.employee) {
            return (
                <div id="inventoryComponent">
                    <p>Inventory works</p>
                    {stock.map((item, index) =>
                        <li key={index}>
                            {item.name}, {index}, <p> edit placeholder</p>
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
                            {item.name}, {index}
                        </li>
                    )}
                </div>
            )
        }
    }
}


export default Inventory;