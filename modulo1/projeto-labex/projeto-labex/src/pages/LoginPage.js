import React from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
export const LoginPage = () => {
  const navigate = useNavigate();
  const voltarPagina = () => {
    navigate(-1);
  };
  const adminVer = () => {
    navigate("/adminver");
  };
  // const autorizaLogar = () => {
  //   axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/login`, {
  //     headers: {
  //       Authorization: "naiara-gomes-franklin"
  //     }
  //   }).then((response) => {
  //     console.log (response.data)
  //   }).catch((error) => { console.log(error.code) })
  // }
  return (
    <div className="Login">
      <h1>Login</h1>
      <input placeholder="E-mail" /> <br />
      <input placeholder="Senha" /> <br />
      <button onClick={voltarPagina}>Voltar</button>
      <button onClick={adminVer}>Entrar</button>
    </div>
  );
};
