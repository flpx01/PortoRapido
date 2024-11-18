import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import EscolherBarco from "./pages/EscolherBarco/EscolherBarco";
import AgendarBarco from "./pages/EscolherBarco/AgendarBarco";
import Agendados from "./pages/Agendados/Agendados";
import "./styles/global.css";
import PosicaoCaminhao from "./pages/PosicaoCaminhao/PosicaoCaminhao";
import Alertas from "./pages/Alertas/Alertas";
import PortoRegistro from "./pages/PortoRegistro/PortoRegistro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/escolher-barco" element={<EscolherBarco />} />
        <Route path="/escolher-barco/agendar/:barcoId" element={<AgendarBarco />} />
        <Route path="/agendados" element={<Agendados />} />
        <Route path="/posicao-caminhao" element={<PosicaoCaminhao />} />
        <Route path="/alertas" element={<Alertas />} />
        <Route path="/porto-registro" element={<PortoRegistro />} />
      </Routes>
    </Router>
  );
}

export default App;
