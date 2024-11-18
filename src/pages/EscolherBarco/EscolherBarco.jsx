import { useNavigate } from "react-router-dom";
import "./EscolherBarco.css";

const EscolherBarco = () => {
  const navigate = useNavigate();

  // Dados fictícios para os barcos
  const barcos = [
    { id: 1, hora: "12:00", data: "29/09", nome: "Creta", destino: "Creta", status: "Previsto" },
    { id: 2, hora: "16:00", data: "29/09", nome: "Mauá", destino: "Mauá", status: "Previsto" },
    { id: 3, hora: "18:30", data: "28/09", nome: "Rio de Janeiro", destino: "Rio de Janeiro", status: "Previsto" },
  ];

  // Função para redirecionar ao clicar no barco
  const handleSelecionarBarco = (barco) => {
    // Passa os dados do barco para a página de agendamento usando navigate com state
    navigate(`/escolher-barco/agendar/${barco.id}`, { state: barco });
  };

  return (
    <div className="escolher-barco-container">
      <header className="escolher-barco-header">
        <button onClick={() => navigate(-1)} className="back-button">{"<"}</button>
        <h1>Escolher Barco</h1>
      </header>

      <div className="escolher-barco-info">
        <div className="icon-container">
          <img src="/assets/boat-icon.png" alt="Ícone de barco" className="boat-icon" />
          <p>Viagens para hoje</p>
        </div>
        <div className="tab-menu">
          <button className="active-tab">Partidas</button>
          <button>Chegadas</button>
        </div>
      </div>

      <table className="escolher-barco-table">
        <thead>
          <tr>
            <th>Hora</th>
            <th>Barco</th>
            <th>Destino</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {barcos.map((barco) => (
            <tr key={barco.id}>
              <td>{barco.hora} <br /> {barco.data}</td>
              <td className="barco-cell">
                <button
                  className="barco-button"
                  onClick={() => handleSelecionarBarco(barco)}
                >
                  <img src="/assets/boat-icon.png" alt="Barco" className="barco-icon" />
                  {barco.nome}
                </button>
              </td>
              <td>{barco.destino}</td>
              <td>{barco.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="mais-barcos-button" onClick={() => navigate("/mais-barcos")}>
        Mais barcos &gt;
      </button>

      <footer className="escolher-barco-footer">
        <button className="footer-icon" onClick={() => navigate("/dashboard")}><i class="las la-home"></i></button>
        <button className="footer-icon" onClick={() => navigate("/alertas")}><i class="las la-exclamation-circle"></i></button>
      </footer>
    </div>
  );
};

export default EscolherBarco;
