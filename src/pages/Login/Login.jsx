import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    senha: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = () => {
    const { email, senha } = credentials;
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Validação do login
    const user = users.find(
      (user) => user.email === email && user.senha === senha
    );
  
    if (!user) {
      setError("E-mail ou senha inválidos!");
      return;
    }
  
    // Armazena o usuário logado
    localStorage.setItem("loggedUser", JSON.stringify(user));
    setError("");
    navigate("/dashboard"); // Redireciona para a tela de dashboard
  };

  const goToRegister = () => {
    navigate("/register"); // Redireciona para a tela de registro
  };

  return (
    <div className="login-container">
      <div className="login-form">
      <img src="logo.png" alt="PortoRápido" className="login-logo" />
        <h1 className="login-title">Login</h1>
        <div className="login-input-container">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={credentials.email}
            onChange={handleChange}
            className="login-input"
          />
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={credentials.senha}
            onChange={handleChange}
            className="login-input"
          />
        </div>
        {error && <p className="login-error">{error}</p>}
        <button onClick={handleLogin} className="login-button">
          Entrar
        </button>
        <p className="login-register-link" onClick={goToRegister}>
          Registrar
        </p>
      </div>
    </div>
  );
};

export default Login;