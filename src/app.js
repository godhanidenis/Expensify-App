import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore';
import { firebase } from './firebase/firebase';
import { startSetExpenses } from './actions/expenses';
import history from './utils/history.js';
import { login, logout } from './actions/auth';
// Configure redux store first
const store = configureStore();

// create component to be rendered
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading ....</p>, document.getElementById('app'));

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

// Redirect user based on login or logout
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('Logged In');
        console.log('user.uid',user.uid);
        store.dispatch(login(user.uid));
        console.log(store);
        renderApp();
        store.dispatch(startSetExpenses()).then(() => {
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    } else {
        console.log('logged out');
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});

