import React, { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const voltarPagina = () => {
    navigate(-1);
  };
  async function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/naiara-gomes-franklin/login`,
        {
          email: email,
          password: senha,
        }
      )
      .then((response) => {
        console.log(response);
        const token = response.data.user.token;
        localStorage.setItem("tokenSalvo", token);
        window.alert("Usuario logado com sucesso");
        navigate("/adminver");
      })
      .catch((err) => {
        console.log(err);
        window.alert("Erro ao logar");
      });
  }
  return (
    <form className="Login" onSubmit={(e) => handleSubmit(e)}>
      <h1>Login</h1>
      <input
        placeholder="E-mail"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />{" "}
      <br />
      <input
        placeholder="Senha"
        value={senha}
        onChange={(event) => setSenha(event.target.value)}
      />{" "}
      <br />
      <button onClick={voltarPagina}>Voltar</button>
      <button type="submit" onClick={handleSubmit}>
        Entrar
      </button>
    </form>
  );
};
