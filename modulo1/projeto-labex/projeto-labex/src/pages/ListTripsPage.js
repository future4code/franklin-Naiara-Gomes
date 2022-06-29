import React from "react";
import './ListTripsPage.css';
import useTrips from "./hooks/UseTrips";
import { useNavigate } from "react-router-dom";
import Trip from "./Trip";



export const ListTripsPage = ( ) => {
  const navigate = useNavigate()
  const voltarPagina = () =>{
    navigate(-1)
  }
  const fazerInscricao = () => {
    navigate("/inscricao")
  }
    const viagens = useTrips()
    console.log(viagens)
    const mostraViagens = viagens.map ((viagem) => {
      return <Trip key={viagem.id} nome={viagem.name} descricao={viagem.description} data={viagem.date} planeta={viagem.planet} duração={viagem.durationInDays}/>
    })
    return (
      <div className="Trip">
        <button onClick={voltarPagina}>Voltar</button>
        <button onClick={fazerInscricao}>Inscrever-se</button>
        <br/>
        <h1>Lista de viagens</h1>
         {mostraViagens}
      </div>
    );
  }