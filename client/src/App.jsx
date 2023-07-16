import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pay from "./pages/Pay";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pay></Pay>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
