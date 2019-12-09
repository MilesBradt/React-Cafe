import React from "react";
import Inventory from './Inventory'
import 'bootstrap/dist/css/bootstrap.css';
import styles from "../css/global.css";
import homeStyles from "../css/home.css";
import propTypes from 'prop-types';

function Home(props) {
    return (
        <div id="homeComponent">
            <h1>Menu</h1>
            <Inventory
            coffeeList={props.coffeeList}
            teaList={props.teaList}
            employee={props.employee}
            itemSubtract={props.itemSubtract}
            />

        </div>
    );
}

Home.propTypes = {
    coffeeList: propTypes.array,
    teaList: propTypes.array,
    employee: propTypes.bool,
    itemSubtract: propTypes.func
}


export default Home;