import { useNavigate } from "react-router-dom";
import "./Agendados.css";

const Agendados = () => {
  const navigate = useNavigate();

  // Recuperar agendamentos do localStorage
  const agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

  // Função para redirecionar à tela de Registrar Ponto
  const handleRegistrarPonto = (agendamento) => {
    navigate("/registrar-ponto", { state: agendamento });
  };

  return (
    <div className="agendados-container">
      <header className="agendados-header">
        <button onClick={() => navigate(-1)} className="back-button">{"<"}</button>
        <h1>Meus Agendamentos</h1>
      </header>

      {agendamentos.length > 0 ? (
        <ul className="agendados-list">
          {agendamentos.map((agendamento, index) => (
            <li key={index} className="agendamento-item">
              <p><strong>{agendamento.nome}</strong></p>
              <p>{agendamento.data} às {agendamento.hora}</p>
              <p>Status: {agendamento.status}</p>
              <button 
                className="registrar-ponto-button" 
                onClick={() => handleRegistrarPonto()}
              >
                Registrar Ponto
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-agendamentos">Você ainda não tem agendamentos.</p>
      )}
    </div>
  );
};

export default Agendados;
