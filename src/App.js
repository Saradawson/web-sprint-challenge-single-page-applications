import React from "react";
import { Route, Link } from "react-router-dom";
import Orderform from "./components/Orderform";

const App = () => {
  return (
    <>
    <Route exact path='/'>
    <header>
        <h1>BloomTech Eats!</h1>
      <nav>
        <Link id='order-pizza' to='/pizza'>Order a Pizza Here!</Link>
      </nav>
    </header>
    </Route>
      <Route path='/pizza'>
        <Orderform />
      </Route>
    </>
  );
};
export default App;
