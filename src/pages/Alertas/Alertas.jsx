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
            Balsa Caxias afunda no rio madeira
            </h2>
            <div className="alert-timestamp">
              <span className="clock-icon">🕒</span>
              29/09/24 às 13:00h
            </div>
            <p className="alert-description">
            Balsa Caxias afunda no rio madeira
            </p>
            <p className="alert-details">
            Uma balsa que transportava uma carga de alimentos colidiu com pedras e ficou presa no sábado (28), em um trecho do Rio Madeira que passa pelo Distrito de Auxiliadora, em Manicoré, interior do Amazonas. Após o acidente, moradores da região saquearam parte da carga, que estava destinada a abastecer comunidades próximas.
            </p>
            
          </div>
        </div>
      </main>
    </div>
  );
}