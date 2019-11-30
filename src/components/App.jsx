import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './Home'
import Employee from './Employee'
import Header from './Header'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/global.css';
import stock from '../assets/javascript/inventory.js'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            masterStockList: [],
            masterCoffeeList: [],
            masterTeaList: [],
            employee: false
        };
        this.subtractStockAmount = this.subtractStockAmount.bind(this)
    }

    componentWillMount() {
        this.importStockToStockList()
        console.log(this.state.masterCoffeeList)
    }

    importStockToStockList() {
        stock.map((item) =>
            this.state.masterStockList.push(item)
        )
        this.state.masterStockList.map((item, index) => {
            if (item.category === "coffee") {
                item.id = index
                this.state.masterCoffeeList.push(item)
            } else if (item.category === "tea") {
                item.id = index
                this.state.masterTeaList.push(item)
            }
        }
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
                    <Header />
                    <Navbar />
                    <Switch>
                        <Route exact path='/' render={(props) => <Home
                            coffeeList={this.state.masterCoffeeList}
                            teaList={this.state.masterTeaList} 
                            />}
                    />
                        <Route path='/employee' render={(props) => <Employee
                            coffeeList={this.state.masterCoffeeList}
                            teaList={this.state.masterTeaList}
                            employee={true}
                            itemSubtract={this.subtractStockAmount}
                        />}
                        />}
                        />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;