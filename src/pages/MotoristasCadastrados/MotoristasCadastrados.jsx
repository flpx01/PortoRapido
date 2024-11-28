import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MotoristasCadastrados.css";

const MotoristasCadastrados = () => {
  const navigate = useNavigate();
  const [motoristas, setMotoristas] = useState([]);

  useEffect(() => {
    // Carrega os motoristas do localStorage quando o componente for montado
    const motoristasFromStorage = JSON.parse(localStorage.getItem("motoristas")) || [];
    setMotoristas(motoristasFromStorage);
  }, []);

  const handleCancel = () => {
    navigate("/dashboard-logistica"); // Redireciona para a página inicial
  };

  const handleChangePassword = (email) => {
    // Lógica para troca de senha
    const novaSenha = prompt("Digite a nova senha:");
    if (novaSenha) {
      const updatedMotoristas = motoristas.map((motorista) =>
        motorista.email === email ? { ...motorista, senha: novaSenha } : motorista
      );
      setMotoristas(updatedMotoristas);
      localStorage.setItem("motoristas", JSON.stringify(updatedMotoristas));
    }
  };

  const handleToggleStatus = (email) => {
    // Lógica para alternar o status do motorista
    const updatedMotoristas = motoristas.map((motorista) =>
      motorista.email === email ? { ...motorista, ativo: !motorista.ativo } : motorista
    );
    setMotoristas(updatedMotoristas);
    localStorage.setItem("motoristas", JSON.stringify(updatedMotoristas));
  };

  const handleClearMotoristas = () => {
    // Limpar os motoristas do localStorage
    localStorage.removeItem("motoristas");
    setMotoristas([]); // Atualiza o estado para a lista vazia
  };

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
              <img src={motorista.foto} alt="Avatar" className="motorista-avatar" />
              <div className="motorista-info">
                <p className="motorista-name">{motorista.nome} {motorista.sobrenome}</p>
                <p className={`motorista-status ${motorista.ativo ? 'ativo' : 'inativo'}`}>
                  {motorista.ativo ? 'Ativo' : 'Inativo'}
                </p>
              </div>

              <div className="motorista-actions">
                <button
                  onClick={() => handleChangePassword(motorista.email)}
                  className="change-password-button"
                >
                  Trocar Senha
                </button>
                <button
                  onClick={() => handleToggleStatus(motorista.email)}
                  className={`deactivate-button ${motorista.ativo ? '' : 'inativo'}`}
                >
                  {motorista.ativo ? 'Inativar' : 'Ativar'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-motoristas">Nenhum motorista cadastrado.</p>
      )}

      <button onClick={() => navigate("/register")} className="registrar-motorista-button">
        Registrar Motorista
      </button>

      <button onClick={handleCancel} className="cancel-button">
        voltar
      </button>

      {/* <button onClick={handleClearMotoristas} className="clear-motoristas-button">
        Limpar Motoristas
      </button> */}

      <div className="navbar">
        <button onClick={() => navigate("/dashboard-logistica")}>🏠</button>
        <button onClick={() => navigate("/alertas")}>❗</button>
      </div>
    </div>
  );
};

export default MotoristasCadastrados;
