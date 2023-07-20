import { BrowserRouter, Route, Routes } from "react-router-dom";
import Success from "./pages/Success";
import Cart from "./pages/Cart";
import PayButton from "./pages/PayButton";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/pay" element={<PayButton></PayButton>} />{" "}
          <Route
            path="/products/:category"
            element={<ProductList></ProductList>}
          />
          <Route path="/product/:id" element={<Product></Product>} />
          <Route path="/success" element={<Success></Success>} />
          <Route path="/cart" element={<Cart></Cart>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
