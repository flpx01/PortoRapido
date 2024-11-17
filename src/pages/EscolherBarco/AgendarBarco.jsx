import { useLocation, useNavigate } from "react-router-dom";
import "./AgendarBarco.css";

const AgendarBarco = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Obtém os dados do barco do state
  const barco = location.state;

  if (!barco) {
    // Redireciona para escolher barco se não houver dados
    navigate("/escolher-barco");
    return null;
  }

  // Função para confirmar o agendamento
  const handleConfirmar = () => {
    // Criar o objeto do agendamento
    const agendamento = {
      hora: barco.hora,
      data: barco.data,
      nome: barco.nome,
      status: barco.status,
    };

    // Salvar no localStorage (ou enviar para API, se necessário)
    const agendados = JSON.parse(localStorage.getItem("agendamentos")) || [];
    agendados.push(agendamento);
    localStorage.setItem("agendamentos", JSON.stringify(agendados));

    // Exibir alerta de confirmação e redirecionar para o dashboard
    alert("Agendamento confirmado com sucesso!");
    navigate("/dashboard");
  };

  return (
    <div className="agendar-barco-container">
      <header className="agendar-barco-header">
        <button onClick={() => navigate(-1)} className="back-button">{"<"}</button>
        <h1>Agendamento</h1>
      </header>

      <div className="agendar-barco-info">
        <p>
          <span>{barco.hora}</span> <br />
          <span>{barco.data}</span>
        </p>
        <h2>{barco.nome}</h2>
        <p>{barco.status}</p>
      </div>

      <div className="agendar-barco-viagens">
        {/* Viagens fictícias */}
        {[
          { id: 1, partida: "09:40", chegada: "12:00", duracao: "1 hora", distancia: "100km", origem: "Ponto 1", destino: "Ponto Final" },
          { id: 2, partida: "15:00", chegada: "17:40", duracao: "1 hora", distancia: "100km", origem: "Ponto 1", destino: "Ponto Final" },
        ].map((viagem) => (
          <div key={viagem.id} className="viagem-card">
            <p>
              <strong>{viagem.partida} &gt; {viagem.chegada}</strong> &nbsp; {viagem.duracao} - {viagem.distancia}
            </p>
            <p>{viagem.origem} para {viagem.destino}</p>
          </div>
        ))}
      </div>

      <button className="confirmar-button" onClick={handleConfirmar}>
        Confirmar
      </button>
    </div>
  );
};

export default AgendarBarco;

