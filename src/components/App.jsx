import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './Home'
import Employee from './Employee'
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/global.css';

function App() {
    return (
        <div>
            <style jsx global>{styles}</style>
            
            <div class='container' id='components-container'>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/:employee' component={Employee} />
                </Switch>
            </div>
        </div>
    );
}

export default App;