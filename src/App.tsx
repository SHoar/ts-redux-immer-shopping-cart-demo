import React from 'react';
// import { Container } from "semantic-ui-react";
import { Container } from "@material-ui/core"
import { Switch, Route } from "react-router-dom";
import { Shop } from "./components/main/shop/Shop";
import { Cart } from "./components/main/cart/Cart";
import { Login } from "./components/main/auth/Login";

import './App.css';
import { Nav } from './components/layouts/Nav';

function App() {
  return (
    <Container maxWidth='xl'>
      <Nav />
      <Switch>
        <Route path="/" exact>Home</Route>
        <Route path="/shop" component={Shop} /> 
        <Route path="/cart" component={Cart} /> 
        <Route path="/login" component={Login} /> 
      </Switch>
    </Container>
  );
}

export default App;
