import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import filters from './reducers/filters';
import pizzas from './reducers/pizzas';
import cart from './reducers/cart';
import thunk from "redux-thunk";

const rootReducers = combineReducers({
    filters,
    pizzas,
    cart,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;

window.store = store;