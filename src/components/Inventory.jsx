import React, { useState } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "../css/global.css";
import inventoryStyles from '../css/inventory.css';
import propTypes from 'prop-types';

function Inventory(props) {

    if (props.employee) {
        return (
            <div class="inventoryComponent">
                {console.log("Employee is true")}
                <div class="coffeeComponent">
                    <span class="coffeeMenuText">Coffee</span>
                    {props.coffeeList.map((item, index) =>
                        <li class="itemsList" key={index}>
                            {item.type} - ${item.price} [{item.amount} cups]
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
            <div class="inventoryComponent">
                <Row>
                    <Col>
                    <span class="coffeeMenuText">Coffee</span>
                    <span class="itemSizeText">Small - Large</span>
                    {console.log(props.coffeeList)}
                    {console.log("Employee is false")}
                    {props.coffeeList.map((item, index) =>
                        <p class="itemsList" key={index}>
                            {item.type} .......... <span id="itemPrice">${item.priceSmall} / {item.priceLarge}</span>
                        </p>
                    )}
                    </Col>
                    <Col>
                        <span class="teaMenuText">Tea</span>
                        <span class="itemSizeText">Small - Large</span>
                        {console.log(props.teaList)}
                        {console.log("Employee is false")}
                        {props.teaList.map((item, index) =>
                            <p class="itemsList" key={index}>
                                {item.type} .......... <span id="itemPrice">${item.priceSmall} / {item.priceLarge}</span>
                            </p>
                        )}
                    </Col>
                </Row>
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