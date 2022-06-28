import React from "react";

import { useNavigate } from "react-router-dom";
export const ListTripsPage = () => {
  const navigate = useNavigate()
  const voltarPagina = () =>{
    navigate(-1)
  }
  const fazerInscricao = () => {
    navigate("/inscricao")
  }
    return (
      <div className="Trip">
        <button onClick={voltarPagina}>Voltar</button>
        <button onClick={fazerInscricao}>Inscrever-se</button>
        <br/>
        <h1>Lista de viagens</h1>
      </div>
    );
  }