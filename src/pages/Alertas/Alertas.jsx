import { useNavigate } from "react-router-dom";
import "./Alertas.css";

export default function Alertas() {
  const navigate = useNavigate();

  return (
    <div className="alerts-container">
      <header className="alerts-header">
        <button className="back-button" onClick={() => navigate("/dashboard-logistica")}>
          ←
        </button>
        <h1>Alertas</h1>
      </header>

      <main className="alerts-main">
        <div className="alert-card">
          <div className="alert-icon">!</div>
          <div className="alert-content">
            <h2 className="alert-title">
              Acidente em uma faixa da BR-101
            </h2>
            <div className="alert-timestamp">
              <span className="clock-icon">🕒</span>
              28/08/24 às 03:00h
            </div>
            <p className="alert-description">
              Carreta pega fogo e bloqueia uma faixa da BR-101
            </p>
            <p className="alert-details">
              Às 21h40, o fogo foi controlado e os bombeiros permanecem no local para combater eventuais novos focos.
            </p>
            <p className="alert-traffic">
              Fila de 500m <span style={{color: "red"}}>trânsito lento.</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}