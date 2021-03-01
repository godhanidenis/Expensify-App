import React from 'react';
import { Router, Route, Switch, Link, NavLink, BrowserRouter } from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage.js';
import EditExpensePage from '../components/EditExpensePage.js';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js';
import NotFoundPage from '../components/NotFoundPage.js';
import LoginPage from '../components/LoginPage.js';
import history from '../utils/history.js';
import PrivateRoute from '../components/PrivateRoute.js';
import PublicRoute from '../components/PublicRoute.js';

// Change BrowserRouter to Router to pass custom history.
const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
            <PrivateRoute path="/create" component={AddExpensePage} />
            <PrivateRoute path="/edit/:id" component={EditExpensePage} />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
);

export default AppRouter;