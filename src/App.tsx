import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/navbar";
import { Route, Switch } from "react-router-dom";
import Page1 from "./Pages/Discover/home";
import Page2 from "./Pages/Categories/home";
import Page3 from "./Pages/page3/home";
import Cart from "./Pages/Cart/home";
import Account from "./Pages/Account/home";
import Product from "./Pages/Product/Product";
import Wishlist from "./Pages/Wishlist/Wishlist";
import AddItem from "./Admin/addItem";
import AddCategory from "./Admin/addCategory";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="m-24"></div>
      <span>
        <Switch>
          <Route path="/" exact>
            <Page1 />
          </Route>
          <Route path="/Categories">
            <Page2 />
          </Route>
          <Route path="/Art">
            <Page3 />
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
          <Route path="/Account">
            <Account />
          </Route>
          <Route path="/Product/:id">
            <Product />
          </Route>
          <Route path="/Wishlist">
            <Wishlist />
          </Route>
          <Route path="/AddItem">
            <AddItem />
          </Route>
          <Route path="/AddCategory">
            <AddCategory />
          </Route>
        </Switch>
      </span>
    </div>
  );
}

export default App;
