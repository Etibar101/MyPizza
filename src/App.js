import React from 'react';
import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import {useDispatch} from "react-redux";
import axios from "axios";
import {fetchPizzas, setPizzas} from "./redux/actions/pizzas";



const App = () => {


    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path="/" component={Home}  exact/>
                <Route path="/cart" component={Cart} exact/>
            </div>
        </div>
    )
}

export default App;