import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter }  from './actions/filters';
import GetVisibleExpenses from './selectors/expenses';

const store = configureStore();
store.dispatch(addExpense({description : "Water bill", amount : 4500}));
store.dispatch(addExpense({description : "Gas bill", createdAt: 1000}));
store.dispatch(addExpense({description : "Rent", amount : 450000 }));

var state = store.getState();
console.log(GetVisibleExpenses(state.expenses, state.filters));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));