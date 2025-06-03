import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { OrdersTable } from "./components/OrdersTable";
import { Budget } from "./components/Budget";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<OrdersTable />} />
          <Route path="budget/:id" element={<Budget />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
