import React from "react";
import './Trip.css';
 const Trip = (props) => {
    return (
        <div className="Container">
        <div className="Viagem">
                    <p><strong>Nome: </strong> {props.nome}</p>
                    <p><strong>Descrição: </strong> {props.descricao}</p>
                    <p><strong>Planeta: </strong> {props.planeta}</p>
                    <p><strong>Duração: </strong> {props.duracao}</p>
                    <p><strong>Data: </strong> {props.data}</p>
                    </div>
                </div>
    )
}
export default Trip








