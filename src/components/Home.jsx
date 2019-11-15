import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import styles from "../css/global.css";

function Home() {
    return (
        <div>
        <p>Home works</p>
        <Link to="/employee"> Employee Link </Link>
        </div>
    );
}


export default Home;