import { useNavigate } from "react-router-dom";
import "./MotoristasCadastrados.css";

const MotoristasCadastrados = () => {
  const navigate = useNavigate();

  // Recupera os motoristas cadastrados no localStorage
  const motoristas = JSON.parse(localStorage.getItem("motoristas")) || [];

  return (
    <div className="motoristas-container">
      <header className="motoristas-header">
        <button onClick={() => navigate(-1)} className="back-button">←</button>
        <h1>Motoristas Cadastrados</h1>
      </header>

      {motoristas.length > 0 ? (
        <ul className="motoristas-list">
          {motoristas.map((motorista, index) => (
            <li key={index} className="motorista-item">
              <img src={motorista.avatar} alt="Avatar" className="motorista-avatar" />
              <div className="motorista-info">
                <p className="motorista-name">{motorista.nome}</p>
                <p className="motorista-email">{motorista.email}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-motoristas">Nenhum motorista cadastrado.</p>
      )}

      <button onClick={() => navigate("/registro-motorista")} className="registrar-motorista-button">
        Registrar Motorista
      </button>

      <div className="navbar">
        <button onClick={() => navigate("/dashboard-logistica")}>🏠</button>
        <button onClick={() => navigate("/alertas")}>❗</button>
      </div>
    </div>
  );
};

export default MotoristasCadastrados;
