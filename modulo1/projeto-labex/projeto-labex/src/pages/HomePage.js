import React from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
export const HomePage = () => {
  const navigate = useNavigate();
  const irParaViagens = () => {
    navigate("/list");
  };
  const irParaAdmin = () => {
    navigate("/login");
  };
  return (
    <div>
      <h1>LabeX</h1>
      <button onClick={irParaViagens}>Ver viagens</button>
      <button onClick={irParaAdmin}>Área de Admin</button>
      <img
        src="https://www.irmaos.com/wp-content/uploads/2019/12/pod392-1.jpg"
        alt="imagem"
      />
    </div>
  );
};
