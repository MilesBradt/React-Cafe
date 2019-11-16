import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import styles from "../css/global.css";
import inventoryStyles from '../css/inventory.css';
import stock from '../assets/javascript/inventory.js'

class Inventory extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            brand: null,
            price: null,
            alcoholContent: null,
            amount: null
        };
    }

    render() {
        console.log("inventory props: " + this.props.employee)
        if (this.props.employee) {
            return (
                <div id="inventoryComponent">
                    <p>Inventory works</p>
                    {stock.map((item, index) =>
                        <li class="itemsList" key={index}>
                            {item.brand}: {item.name} ({item.alcoholContent}%) - ${item.price} [{item.amount} pints] <button onClick={() => {
                                stock[index].amount = stock[index].amount - 1
                                console.log(stock[index].amount)
                                this.setState({ amount: stock[index].amount })
                            }} 
                            class="sellButton">Sell</button> / <button id="classButton">Edit</button>
                        </li>
                    )}
                </div>
            )
        } else {
            return (
                <div id="inventoryComponent">
                    <p>Inventory works</p>
                    {stock.map((item, index) =>
                        <li class="itemsList" key={index}>
                            {item.brand}: {item.name} ({item.alcoholContent}%) - ${item.price}
                        </li>
                    )}
                </div>
            )
        }
    }
}

export default Inventory;