import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CadastroEmpresa.css";

const CadastroEmpresa = () => {
  const [formData, setFormData] = useState({
    nomeEmpresa: "",
    nf: "",
    tipoCarga: "",
    pesoTotal: "",
    observacoes: "",
  });

  const [barcoSelecionado, setBarcoSelecionado] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Recupera os dados do barco agendado e preenche automaticamente
    const agendamentos = JSON.parse(localStorage.getItem("agendamentos"));
    if (agendamentos && agendamentos.length > 0) {
      setBarcoSelecionado(agendamentos[agendamentos.length - 1]); // Pega o último agendamento
    } else {
      alert("Nenhum barco agendado. Redirecionando para a tela de escolha.");
      navigate("/escolher-barco");
    }

    // Recupera os dados do formulário salvo no localStorage, caso existam
    const savedFormData = JSON.parse(localStorage.getItem("cadastroEmpresa"));
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTipoCargaChange = (tipo) => {
    setFormData({ ...formData, tipoCarga: tipo });
  };

  const handleSubmit = () => {
    const { nomeEmpresa, nf, tipoCarga, pesoTotal, observacoes } = formData;

    if (!nomeEmpresa || !nf || !tipoCarga || !pesoTotal) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    // Salva os dados no localStorage
    localStorage.setItem("cadastroEmpresa", JSON.stringify(formData));

    // Exibe a confirmação
    console.log("Dados enviados:", formData);
    alert("Agendamento realizado com sucesso!");
    navigate("/agendados");
  };

  return (
    <div className="cadastro-empresa-container">
      <header className="cadastro-empresa-header">
        <button className="voltar-button" onClick={() => navigate(-1)}>←</button>
        <h1>Agendamento</h1>
      </header>

      {/* Exibe as informações do barco escolhido */}
      {barcoSelecionado ? (
        <div className="cadastro-empresa-barco-info">
          <p><strong>{barcoSelecionado.nome}</strong> — {barcoSelecionado.destino}, Porto Roadway</p>
          <p>Hora: {barcoSelecionado.hora} - Data: {barcoSelecionado.data}</p>
          <p>Status: {barcoSelecionado.status}</p>
        </div>
      ) : (
        <p>Carregando dados do barco...</p>
      )}

      <div className="cadastro-empresa-form">
        <input
          type="text"
          name="nomeEmpresa"
          placeholder="Nome Empresa"
          value={formData.nomeEmpresa}
          onChange={handleChange}
          className="cadastro-empresa-input"
        />
        <input
          type="text"
          name="nf"
          placeholder="NF"
          value={formData.nf}
          onChange={handleChange}
          className="cadastro-empresa-input"
        />
        <div className="cadastro-empresa-radio-group">
          <label>
            <input
              type="radio"
              name="tipoCarga"
              value="congelado"
              checked={formData.tipoCarga === "congelado"}
              onChange={() => handleTipoCargaChange("congelado")}
            />
            Congelado
          </label>
          <label>
            <input
              type="radio"
              name="tipoCarga"
              value="seco"
              checked={formData.tipoCarga === "seco"}
              onChange={() => handleTipoCargaChange("seco")}
            />
            Seco
          </label>
        </div>
        <input
          type="number"
          name="pesoTotal"
          placeholder="Peso Total"
          value={formData.pesoTotal}
          onChange={handleChange}
          className="cadastro-empresa-input"
        />
        <textarea
          name="observacoes"
          placeholder="Observações"
          value={formData.observacoes}
          onChange={handleChange}
          className="cadastro-empresa-textarea"
        ></textarea>
        <button onClick={handleSubmit} className="cadastro-empresa-button">
          Confirmar
        </button>
      </div>
    </div>
  );
};

export default CadastroEmpresa;

