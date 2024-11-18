import { useNavigate } from "react-router-dom";
import "./PortoRegistro.css";
import Karine from "../../assets/karine.jpeg"
import Mapa from "../../assets/mapa.png"

export default function PortoRegistro() {
  const navigate = useNavigate();

  return (
    <div className="location-container">
      <div className="map-section">
       <img src={Mapa} className="map" alt="mapa" />
      </div>

      <div className="profile-section">
        <div className="avatar">
          <img
            src={Karine}
            alt=""
            className="avatar-image"
          />
        </div>
        <div className="profile-info">
          <h2 className="profile-name">Karine Almeida</h2>
          <p className="profile-role">Caminhoneiro(a)</p>
        </div>
      </div>

      <div className="time-display">11:16</div>

      <div className="location-info">
        <div className="location-text">01 - Porto Açu</div>
      </div>

      <div className="document-icon">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      </div>

      <button className="confirm-button" onClick={() => navigate("/posicao-caminhao")}>Confirmar</button>
    </div>
  );
}
