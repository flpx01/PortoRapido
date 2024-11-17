import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
    confirmaSenha: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { nome, sobrenome, email, senha, confirmaSenha } = formData;

    if (!nome || !sobrenome || !email || !senha || !confirmaSenha) {
      setError("Por favor, preencha todos os campos!");
      return;
    }

    if (senha !== confirmaSenha) {
      setError("As senhas não coincidem!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((user) => user.email === email);

    if (userExists) {
      setError("Este e-mail já está cadastrado!");
      return;
    }

    users.push({ nome, sobrenome, email, senha });
    localStorage.setItem("users", JSON.stringify(users));
    setError("");
    navigate("/login");
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <img
          src="https://via.placeholder.com/150"
          alt="Logo"
          className="register-logo"
        />
        <h1 className="register-title">PortoRapido</h1>
        <div className="register-input-container">
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
            className="register-input"
          />
          <input
            type="text"
            name="sobrenome"
            placeholder="Sobrenome"
            value={formData.sobrenome}
            onChange={handleChange}
            className="register-input"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="register-input"
          />
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={formData.senha}
            onChange={handleChange}
            className="register-input"
          />
          <input
            type="password"
            name="confirmaSenha"
            placeholder="Confirme sua senha"
            value={formData.confirmaSenha}
            onChange={handleChange}
            className="register-input"
          />
        </div>
        {error && <p className="register-error">{error}</p>}
        <button onClick={handleSubmit} className="register-button">
          Confirmar
        </button>
      </div>
    </div>
  );
};

export default Register;
