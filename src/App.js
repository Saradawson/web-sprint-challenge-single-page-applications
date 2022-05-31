import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Orderform from "./components/Orderform";
import './App.css';

const App = () => {
  return (
    <>
    <header>
        <img id="pizzaImage" src="/pizza.jpg" alt="pizza" />
      <nav>
        <Link id="home" to='/'>Home</Link>
        <Link id='order-pizza' to='/pizza'>Order a Pizza Here!</Link>
        <Link id="order-success" to='/myorder'>My Order</Link>
      </nav>
    </header>
    <main>
    <Switch>
      <Route exact path='/'>
        <h1>BloomTech Eats!</h1>
        <p>BloomTech Eats brings food to coders like you! Take a break and order a custom pizza! All you have to do is click 'Order a Pizza Here'!</p>
      </Route>
      <Route exact path='/pizza'>
        <h1>Create Your Own Pizza!</h1>
        <Orderform />
      </Route>
      <Route exact path='/myorder'></Route>
    </Switch>
    </main>
    </>
  );
};
export default App;
