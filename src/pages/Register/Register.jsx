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
    foto: null, // Para armazenar a imagem do usuário
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, foto: reader.result }); // Salva a imagem em base64 no estado
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const { nome, sobrenome, email, senha, confirmaSenha, foto } = formData;

    if (!nome || !sobrenome || !email || !senha || !confirmaSenha || !foto) {
      setError("Por favor, preencha todos os campos e envie uma foto!");
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

    users.push({ nome, sobrenome, email, senha, foto });
    localStorage.setItem("users", JSON.stringify(users));
    setError("");
    navigate("/");
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <img
          src="src/assets/61f1ece6-5915-4f8b-a242-586e78576196.jpeg"
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
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="register-input-file"
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
