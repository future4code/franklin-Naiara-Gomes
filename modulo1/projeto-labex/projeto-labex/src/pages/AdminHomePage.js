import React from "react";
import styledComponents from "styled-components";
export const Titulo = styledComponents.h1`
color: red;
`;
const AdminHomePage = () => {
    return (
      <div>
        <h1>Painel Administrativo</h1> <br/>
        <button>Voltar</button>
        <button>Criar Viagem</button>
        <button>Logout</button>
      </div>
    );
  }
  export default AdminHomePage;