import React from "react";
import { Link } from 'react-router-dom';
import Inventory from './Inventory'
import 'bootstrap/dist/css/bootstrap.css';
import styles from "../css/global.css";
import homeStyles from "../css/home.css";

function Home() {
    return (
        <div id="homeComponent">
            <p>Home works</p>
            <Link to="/employee"> Employee Link </Link>
            <div class="container">
                <Inventory/>
            </div>
        </div>
    );
}


export default Home;