import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Orderform from "./components/Orderform";
import './App.css';

const App = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    console.log(orders);
  }, [orders])

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
        <Orderform orders={orders} setOrders={setOrders}/>
      </Route>
      <Route exact path='/myorder'>
        <h1>BloomTech Eats has recieved your pickup order!</h1>
        {
          orders.map(order => (
            <article>
              <h2>{`${order.fullname}'s order is placed!`}</h2>
              <p>{`Size: ${order.size}`}</p>
              <h3>Toppings</h3>
              <p>{`Peperoni: ${order.peperoni}`}</p>
              <p>{`Olives: ${order.olives}`}</p>
              <p>{`Peppers: ${order.peppers}`}</p>
              <p>{`Mushrooms: ${order.mushrooms}`}</p>
              <h3>{`Special Instructions: ${order.instructions}`}</h3>
            </article>
          ))
        }
      </Route>
    </Switch>
    </main>
    </>
  );
};
export default App;
