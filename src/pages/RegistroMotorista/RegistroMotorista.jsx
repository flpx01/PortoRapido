import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistroMotorista.css";

const RegistroMotorista = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cnh: "",
    dataNascimento: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { nome, cnh, dataNascimento } = formData;

    if (!nome || !cnh || !dataNascimento) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    // Recupera motoristas do localStorage e adiciona o novo motorista
    const motoristas = JSON.parse(localStorage.getItem("motoristas")) || [];
    motoristas.push(formData);

    // Salva os motoristas no localStorage
    localStorage.setItem("motoristas", JSON.stringify(motoristas));

    alert("Motorista registrado com sucesso!");
    navigate("/motoristas-cadastrados"); // Redireciona para a lista de motoristas
  };

  return (
    <div className="registro-motorista-container">
      <header className="registro-motorista-header">
        <button onClick={() => navigate(-1)} className="back-button">←</button>
        <h1>Registrar Motorista</h1>
      </header>

      <div className="registro-motorista-form">
        <input
          type="text"
          name="nome"
          placeholder="Nome Completo"
          value={formData.nome}
          onChange={handleChange}
          className="registro-motorista-input"
        />
        <input
          type="text"
          name="cnh"
          placeholder="Número da CNH"
          value={formData.cnh}
          onChange={handleChange}
          className="registro-motorista-input"
        />
        <input
          type="date"
          name="dataNascimento"
          value={formData.dataNascimento}
          onChange={handleChange}
          className="registro-motorista-input"
        />
        <button onClick={handleSubmit} className="registro-motorista-button">
          Registrar
        </button>
      </div>
    </div>
  );
};

export default RegistroMotorista;
