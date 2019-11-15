import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/global.css';

function App() {
    return (
        <div>
            <style jsx global>{styles}</style>
            
            <div class='container' id='components-container'>
                <div class='row'>
                    <Switch>
                        <Route exact path='/' component={Home} />
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default App;