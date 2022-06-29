import React from "react";
import './Trip.css';
const Trip = (props) => {
    return (
        <div className="Viagem">
            <container>
                    <p><strong>Nome: </strong> {props.nome}</p>
                    <p><strong>Descrição: </strong> {props.descricao}</p>
                    <p><strong>Planeta: </strong> {props.planeta}</p>
                    <p><strong>Duração: </strong> {props.duracao}</p>
                    <p><strong>Data: </strong> {props.data}</p>
                    </container>
                </div>
    )
}
export default Trip