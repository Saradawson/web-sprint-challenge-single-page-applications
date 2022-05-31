import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Orderform from "./components/Orderform";
import './App.css';

const App = () => {
  return (
    <>
    <Route exact path='/'>
    <header>
        <img id="pizzaImage" src="/pizza.jpg" alt="pizza" />
      <nav>
        <Link id="home" to='/'>Home</Link>
        <Link id='order-pizza' to='/pizza'>Order a Pizza Here!</Link>
        <Link id="order-success" to='/myorder'>My Order</Link>
      </nav>
      <h1>BloomTech Eats!</h1>
    </header>
    </Route>
    <main>
    <Switch>
      <Route exact path=''>

      </Route>
      <Route exact path='/pizza'>
        <Orderform />
      </Route>
      <Route exact path=''>

      </Route>
    </Switch>
    </main>
    </>
  );
};
export default App;
