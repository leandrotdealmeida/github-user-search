import Header from 'core/components/Header';
import Home from 'pages/Home';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Routes = () => (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/search">
                Search
            </Route>
        </Switch>
    </BrowserRouter>
)

export default Routes;