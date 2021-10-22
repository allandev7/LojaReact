import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import Home from './pages/home'


// import { Container } from './styles';

export default function src() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home}/>
        </Switch>
    </BrowserRouter>
  );
}
