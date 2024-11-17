import { useNavigate } from "react-router-dom";
import "./RegistrarPonto.css";

const RegistrarPonto = () => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    alert("Ponto registrado com sucesso!");
    navigate("/dashboard");
  };

  return (
    <div className="registrar-ponto-container">
      <div className="map-container">
        <img
          src="https://via.placeholder.com/300x200.png" // Substitua pelo mapa dinâmico se necessário
          alt="Mapa"
          className="map-image"
        />
      </div>
      <div className="info-container">
        <div className="user-info">
          <img
            src="https://via.placeholder.com/50"
            alt="Usuário"
            className="user-image"
          />
          <div className="user-details">
            <p>Maria do Nascimento</p>
            <p className="role">Caminhoneiro(a)</p>
          </div>
        </div>
        <div className="time-info">
          <h1>11:16</h1>
        </div>
        <div className="location-info">
          <p>
            <span className="location-icon">📍</span> 01 - Porto de Açu
          </p>
        </div>
        <div className="confirm-icon">
          <span role="img" aria-label="door">
            🚪
          </span>
        </div>
        <button className="confirm-button" onClick={handleConfirm}>
          Confirmar
        </button>
      </div>
    </div>
  );
};

export default RegistrarPonto;
