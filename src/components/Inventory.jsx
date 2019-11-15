import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import styles from "../css/global.css";
import inventoryStyles from '../css/inventory.css';
import stock from '../assets/javascript/inventory.js'

// function Inventory(props) {
//     console.log("inventory props: " + props.employee)
//     if (props.employee) {
//         return (
//             <div id="inventoryComponent">
//                 <p>Inventory works</p>
//                 {stock.map((item, index) =>
//                     <li class="itemsList" key={index}>
//                         {item.brand}: {item.name} ({item.alcoholContent}%) - ${item.price} [{item.amount} pints] <button class="sellButton">Sell</button> / <button id="classButton">Edit</button>
//                     </li>
//                 )}
//             </div>
//         )
//     } else {
//         return (
//             <div id="inventoryComponent">
//                 <p>Inventory works</p>
//                 {stock.map((item, index) =>
//                     <li class="itemsList" key={index}>
//                         {item.brand}: {item.name} ({item.alcoholContent}%) - ${item.price}
//                     </li>
//                 )}
//             </div>
//         )
//     }
// }

class Inventory extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            name: stock.name,
            brand: stock.brand,
            price: stock.price,
            alcoholContent: stock.alcoholContent,
            amount: SVGTextContentElement.amount
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
                            {item.brand}: {item.name} ({item.alcoholContent}%) - ${item.price} [{item.amount} pints] <button class="sellButton">Sell</button> / <button id="classButton">Edit</button>
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