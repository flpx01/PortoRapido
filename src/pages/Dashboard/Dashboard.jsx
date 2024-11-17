import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Recupera as informações do usuário logado
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    if (!loggedUser) {
      // Se não há usuário logado, redireciona para o login
      navigate("/login");
    } else {
      setUser(loggedUser); // Seta os dados do usuário
    }
  }, [navigate]);

  const handleLogout = () => {
    // Limpa o usuário logado e redireciona para o login
    localStorage.removeItem("loggedUser");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      {user ? (
        <div className="dashboard-content">
          <h1>Bem-vindo, {user.nome}!</h1>
          <p>E-mail: {user.email}</p>
          <div className="buttons-container">
            <button className="dashboard-button" onClick={() => navigate("/escolher-barco")}>
              Escolher Barco
            </button>
            <button className="dashboard-button" onClick={() => navigate("/porto-registro")}>
              Porto de Registro
            </button>
            <button className="dashboard-button" onClick={() => navigate("/posicao-caminhao")}>
              Posição do Caminhão
            </button>
            <button className="dashboard-button" onClick={() => navigate("/agendados")}>
              Agendados
            </button>
          </div>
          <button onClick={handleLogout} className="logout-button">
            Sair
          </button>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Dashboard;