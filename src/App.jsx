import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import EscolherBarco from "./pages/EscolherBarco/EscolherBarco";
import AgendarBarco from "./pages/EscolherBarco/AgendarBarco";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/escolher-barco" element={<EscolherBarco />} />
        <Route path="/escolher-barco/agendar/:barcoId" element={<AgendarBarco />} />
      </Routes>
    </Router>
  );
}

export default App;
