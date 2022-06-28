import React from "react";
import './AdminHomePage.css';
import { useNavigate } from "react-router-dom";
export const AdminHomePage = () => {
  const navigate = useNavigate()
  const voltarPagina = () =>{
    navigate(-1)
  }
    return (
      <div className="Autorizados">
        <h1>Painel Administrativo</h1> <br/>
        <button onClick={voltarPagina}>Voltar</button>
        <button>Criar Viagem</button>
        <button>Logout</button>
      </div>
    );
  }

  export default AdminHomePage