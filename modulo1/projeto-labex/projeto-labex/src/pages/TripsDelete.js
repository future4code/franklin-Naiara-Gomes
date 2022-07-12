import React from "react";
import axios from "axios";
import { FiTrash2 } from 'react-icons/fi';
// import { Trip } from "./Trip";
//ainda não funciona o botao de deletar, entender o porquê (observar a API)
const deletarViagem = (id) => {
    const token = localStorage.getItem('token')
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/naiara-gomes-franklin/trips/${id}`, {
      headers: {
        "Content-Type": "application/json",
         auth: token
      }
    }).then((response) => {
      console.log (response.data)
    }).catch((error) => {
     })
  }
export const TripsDelete = (id) => {
  return (
    <div className="Container">
      <div className="Viagem">
      <p>{id.nome}</p>
      </div>
      <button onClick={deletarViagem}><FiTrash2 size={13} /></button>
    </div>
  );
};














