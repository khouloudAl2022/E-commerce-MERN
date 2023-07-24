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
          <Route path="/pay" element={<PayButton></PayButton>} />
          <Route
            path="/products"
            element={<ProductList></ProductList>}
          />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<Register></Register>} />

          <Route path="/product" element={<Product></Product>} />
          <Route path="/success" element={<Success></Success>} />
          <Route path="/cart" element={<Cart></Cart>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
