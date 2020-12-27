import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage.js';
import Header from '../components/Header.js';
import EditExpensePage from '../components/EditExpensePage.js';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js';
import HelpExpensePage from '../components/HelpExpensePage.js';
import NotFoundPage from '../components/NotFoundPage.js';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;