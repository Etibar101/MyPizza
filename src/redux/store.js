import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import filtersReducer from './reducers/filters';
import pizzasReducer from './reducers/pizzas';
import thunk from "redux-thunk";

const rootReducers = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;

window.store = store;