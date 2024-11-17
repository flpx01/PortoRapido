import { useParams } from "react-router-dom";
import "./AgendarBarco.css";

const AgendarBarco = () => {
  const { barcoId } = useParams(); // Obtém o ID do barco da URL

  return (
    <div className="agendar-barco-container">
      <h1>Agendar Barco</h1>
      <p>Você está agendando uma viagem para o barco ID: {barcoId}</p>
      {/* Adicione o formulário de agendamento ou outras funcionalidades */}
    </div>
  );
};

export default AgendarBarco;
