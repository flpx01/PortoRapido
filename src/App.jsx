import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Alertas from "./pages/Alertas/Alertas";
import DashboardMotorista from "./pages/Dashboard/DashboardMotorista";
import DashboardLogistica from "./pages/Dashboard/DashboardLogistica";
import EscolherBarco from "./pages/EscolherBarco/EscolherBarco";
import AgendarBarco from "./pages/EscolherBarco/AgendarBarco";
import AgendadosLogistica from "./pages/Agendados/AgendadosLogistica";
import PosicaoCaminhao from "./pages/PosicaoCaminhao/PosicaoCaminhao";
import PortoRegistro from "./pages/PortoRegistro/PortoRegistro";
import CadastroEmpresa from "./pages/CadastroEmpresa/CadastroEmpresa"; // Nova tela

function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas Universais */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/alertas" element={<Alertas />} />

        {/* Rotas para Motorista */}
        <Route path="/dashboard-motorista" element={<DashboardMotorista />} />
        <Route path="/agendados" element={<AgendadosLogistica />} />
        <Route path="/porto-registro" element={<PortoRegistro />} />
        <Route path="/posicao-caminhao" element={<PosicaoCaminhao />} />

        {/* Rotas para Logística */}
        <Route path="/dashboard-logistica" element={<DashboardLogistica />} />
        <Route path="/escolher-barco" element={<EscolherBarco />} />
        <Route path="/escolher-barco/agendar/:barcoId" element={<AgendarBarco />} />
        <Route path="/cadastro-empresa" element={<CadastroEmpresa />} />
        <Route path="/agendados-Logistica" element={<AgendadosLogistica />} />
      </Routes>
    </Router>
  );
}

export default App;
