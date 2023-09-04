import Success from "./pages/Success";
import Cart from "./pages/Cart";
import React from "react";

import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import WishList from "pages/WhichList";
import PrivateRoute from "Routes/PrivateRoute";
// import { useSelector } from "react-redux";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            // @ts-ignore
            exact
            path="/"
            element={<Home></Home>}
          />
          <Route
            exact
            path="/products/:category"
            element={<ProductList></ProductList>}
          />
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register></Register>}></Route>

          <Route exact path="/product/:id" element={<Product></Product>} />
          <Route
            exact
            path="/success"
            element={
              <PrivateRoute>
                <Success />
              </PrivateRoute>
            }
          />
          <Route exact path="/cart" element={<Cart></Cart>} />
          <Route exact path="/wishlist" element={<WishList></WishList>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
