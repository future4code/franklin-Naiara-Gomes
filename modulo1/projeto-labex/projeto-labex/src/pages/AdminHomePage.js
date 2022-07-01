import React from "react";
import './AdminHomePage.css';
import { useNavigate } from "react-router-dom";
import useTrips from "./hooks/UseTrips";
import { TripsDelete } from "./TripsDelete";
export const AdminHomePage = () => {
  const navigate = useNavigate()
  const voltarPagina = () =>{
    navigate(-1)
  }
  const voltarLogin = () => {
    navigate("/login")
  }
  const criaTrip = () => {
    navigate("/criar")
  }
  const viagens = useTrips()
  console.log(viagens)
  const mostraViagens = viagens.map ((viagem) => {
    return <TripsDelete  nome={viagem.name} />
  })
    return (
      <div className="Autorizados">
        <h1>Painel Administrativo</h1> <br/>
        <button onClick={voltarPagina}>Voltar</button>
        <button onClick={criaTrip}>Criar Viagem</button>
        <button onClick={voltarLogin}>Logout</button>
         {mostraViagens}
      </div>
    );
  }




