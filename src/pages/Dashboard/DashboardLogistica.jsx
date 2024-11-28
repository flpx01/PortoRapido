import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShip, FaMapMarkerAlt, FaCalendarCheck, FaHome, FaBell } from "react-icons/fa";
import "./Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Recupera as informações do usuário logado
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    if (!loggedUser) {
      // Se não há usuário logado, redireciona para o login
      navigate("/");
    } else {
      setUser(loggedUser); // Seta os dados do usuário
    }
  }, [navigate]);

  const handleLogout = () => {
    // Limpa o usuário logado e redireciona para o login
    localStorage.removeItem("loggedUser");
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="user-info">
          <img
            src={user?.foto || "https://via.placeholder.com/40"} // Usa a imagem do usuário ou uma imagem padrão
            alt="Avatar"
            className="user-avatar"
          />
          <p>Olá, {user ? user.nome : "Carregando..."}</p>
        </div>
        <FaBell className="bell-icon" onClick={() => navigate("/alertas")} />
      </div>

      <div className="dashboard-content">
        {user ? (
          <div>
            <h1>Porto Rápido</h1>
            <div className="buttons-container">
              <button
                className="dashboard-button"
                onClick={() => navigate("/escolher-barco")}
              >
                <FaShip className="icon" />
                Escolher Barco
              </button>
              <button
                className="dashboard-button"
                onClick={() => navigate("/motoristas-cadastrados")}
              >
                <FaMapMarkerAlt className="icon" />
                Registrar Motorista
              </button>
              <button
                className="dashboard-button"
                onClick={() => navigate("/posicao-caminhao")}
              >
                <FaMapMarkerAlt className="icon" />
                Posição do Caminhão
              </button>
              <button
                className="dashboard-button"
                onClick={() => navigate("/agendados")}
              >
                <FaCalendarCheck className="icon" />
                Agendados
              </button>
            </div>
            <button className="logout-button" onClick={handleLogout}>
              Sair
            </button>
          </div>
        ) : (
          <p>Carregando...</p>
        )}
      </div>

      <div className="bottom-navbar">
        <div className="nav-item" onClick={() => navigate("/dashboard-logistica")}>
          <FaHome className="icon" />
          <p>Início</p>
        </div>
        <div className="nav-item" onClick={() => navigate("/alertas")}>
          <FaBell className="icon" />
          <p>Notificações</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;