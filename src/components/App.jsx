import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './Home'
import Employee from './Employee'
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/global.css';
import stock from '../assets/javascript/inventory.js'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            masterStockList: []
        };
    }

    componentWillMount() {
        this.importStockToStockList()
        console.log(this.state.masterStockList)
    }


    importStockToStockList() {
        stock.map((item, index) =>
            this.state.masterStockList.push(item)
        )
    }

    render() {
        return (
            <div>
                <style jsx global>{styles}</style>
                <div class='container' id='components-container'>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/employee' render={(props) => <Employee stockList={this.state.masterStockList}
                            currentRouterPath={props.location.pathname} />}
                        />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;