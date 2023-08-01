import Success from "./pages/Success";
import Cart from "./pages/Cart";
import PayButton from "./pages/PayButton";
import React from "react";

import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  // const user = true;
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
          <Route exact path="/pay" element={<PayButton></PayButton>} />
          <Route
            exact
            path="/products/:category"
            element={<ProductList></ProductList>}
          />
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register></Register>}></Route>

          <Route exact path="/product/:id" element={<Product></Product>} />
          <Route exact path="/success" element={<Success></Success>} />
          <Route exact path="/cart" element={<Cart></Cart>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
