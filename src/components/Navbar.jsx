import React from "react";
import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Inventory from './Inventory';
import styles from "../css/global.css";
import navStyles from "../css/nav.css";
import Employee from "./Employee";


function Navbar(props) {
    return (
        <div id="navComponent">
            <Tabs className="test" defaultActiveKey="home" id="tabs">
                <Tab eventKey="home" title="Home">
                    {/* <Link to={{
                        pathname: '/employee'
                    }}> Employee </Link> */}
                    <Inventory
                        employee={false}
                        stockList={props.stockList} />
                </Tab>
                <Tab eventKey="employee" title="Employee">
                    {/* <Link to={{
                        pathname: '/employee'
                    }}> Employee </Link> */}
                    <Employee
                        employee={true}
                        stockList={props.stockList}
                        itemSubtract={props.itemSubtract} />
                </Tab>
            </Tabs>
        </div>
    );
}


export default Navbar;