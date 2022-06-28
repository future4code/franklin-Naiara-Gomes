import React from "react";
import './CreateTripPage.css';
import { useNavigate } from "react-router-dom";
export const CreateTripPage = () => {
    const navigate = useNavigate()
    const voltarPagina = () =>{
      navigate(-1)
    }
    return (
        <div className="Embarcar-nave">
            <h1>Criar Viagem</h1> <br />
            <form>
                <input placeholder="Nome" /><br />
                <select>
                    <option value disabled selected>Escolha um Planeta</option>
                    <option>Mercurio</option>
                    <option>Venus</option>
                    <option>Marte</option>
                    <option>Plutão</option>
                </select><br />
                <input placeholder="Data" type="date" required="" min="2022-06-21" value="" /> <br />
                <input placeholder="Descrição" required="" pattern="^.{30,}$" title="O nome deve ter no mínimo 30 caracteres" value="" /> <br />
                <input placeholder="Duração em dias" type="number" />
            </form>
            <button onClick={voltarPagina}>Voltar</button>
            <button>Criar</button>
        </div>
    );
}
