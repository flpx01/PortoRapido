import { useNavigate } from "react-router-dom";
import "./PosicaoCaminhao.css";

export default function PosicaoCaminhao() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <header className="header">
        <button className="back-button" onClick={() => navigate("/dashboard")}>←</button>
        <h1>Caminhão</h1>
      </header>

      <main className="main">
        <div className="card">
          <div className="card-content">
            <div className="truck-icon"></div>
            <div className="info">
              <div className="status">
                <span className="truck-number">01</span>
                <span className="status-text green">- Descarregando</span>
              </div>
              <div className="location">Mamãe Hortifruti</div>
            </div>
            <div className="eta">
              <span className="clock"></span>
              Previsão: 9 min
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="truck-icon"></div>
            <div className="info">
              <div className="status">
                <span className="truck-number">02</span>
                <span className="status-text">- Em fila</span>
              </div>
              <div className="location">HR produtos</div>
            </div>
            <div className="eta">
              <span className="clock"></span>
              Previsão: 5 min
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="truck-icon"></div>
            <div className="info">
              <div className="status">
                <span className="truck-number">03</span>
                <span className="status-text">- Em fila</span>
              </div>
              <div className="location">Carnes KL</div>
            </div>
            <div className="eta">
              <span className="clock"></span>
              Previsão: 9 min
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="truck-icon"></div>
            <div className="info">
              <div className="status">
                <span className="truck-number">04</span>
                <span className="status-text">- Em fila</span>
              </div>
              <div className="location">Distribuidora HR</div>
            </div>
            <div className="eta">
              <span className="clock"></span>
              Previsão: 20 min
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <button
          className="footer-button"
          onClick={() => navigate("/dashboard")}
        >
          🏠
        </button>
        <button className="footer-button" onClick={() => navigate("/alertas")}>
          ❗
        </button>
      </footer>
    </div>
  );
}