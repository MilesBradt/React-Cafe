import React from "react";
import { Link } from 'react-router-dom';
import Inventory from './Inventory'
import 'bootstrap/dist/css/bootstrap.css';
import styles from "../css/global.css";
import homeStyles from "../css/home.css";
import propTypes from 'prop-types';

function Home(props) {
    return (
        <div id="homeComponent">
            <Link to={{
                pathname: '/employee'
            }}> Employee Link </Link>
            <div class="container">
                <Inventory
                employee={false}
                stockList={props.stockList}/>
            </div>
        </div>
    );
}

Home.propTypes = {
    stockList: propTypes.array
}


export default Home;