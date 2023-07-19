import { BrowserRouter, Route, Routes } from "react-router-dom";
import Success from "./pages/Success";
import Cart from "./pages/Cart";
import PayButton from "./pages/PayButton";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/pay" element={<PayButton></PayButton>} />
          <Route path="/success" element={<Success></Success>} />
          <Route path="/cart" element={<Cart></Cart>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
