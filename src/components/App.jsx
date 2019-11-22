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
            masterStockList: [],
            employee: false
        };
        this.subtractStockAmount = this.subtractStockAmount.bind(this)
    }

    componentWillMount() {
        this.importStockToStockList()
    }

    importStockToStockList() {
        stock.map((item) =>
            this.state.masterStockList.push(item)
        )
    }

    subtractStockAmount(index) {
        var newStockList = this.state.masterStockList;
        newStockList[index].amount--
        this.setState({masterStockList: newStockList})
    }

    render() {
        return (
            <div>
                <style jsx global>{styles}</style>
                <div class='container' id='components-container'>
                    <Switch>
                        <Route exact path='/' render={(props) => <Home 
                        stockList={this.state.masterStockList} />} 
                        />
                        <Route path='/employee' render={(props) => <Employee 
                        stockList={this.state.masterStockList} 
                        employee={true}
                        itemSubtract={this.subtractStockAmount}/>}
                        />}
                        />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;