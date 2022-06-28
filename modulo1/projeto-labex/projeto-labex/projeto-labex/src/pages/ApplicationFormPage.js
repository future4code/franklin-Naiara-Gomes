import React from "react";
import './ApplicationFormPage.css';
import { useNavigate } from "react-router-dom";
export const ApplicationFormPage = () => {
    const navigate = useNavigate()
  const voltarPagina = () =>{
    navigate(-1)
  }
  const criarViagem = () => {
    navigate("/criar")
  }
    return (
        <div className="Inscreva-se">
            <h1>Inscreva-se para uma viagem</h1>
            <br />
            <select>
                <option value disabled selected>Escolha uma viagem</option>
                <option>Astro</option>
                <option>Jupter</option>
                <option>Master</option>
            </select><br />
            <input placeholder="Nome" /><br />
            <input placeholder="Idade" /><br />
            <input placeholder="Texto de Candidatura" /><br />
            <input placeholder="Profissão" /><br />
            <select>
                <option value disabled selected>Escolha um País</option>
                <option>Argentina</option>
                <option>Brasil</option>
                <option>Portugal</option>
            </select>
            <br />
            <button onClick={voltarPagina}>Voltar</button>
            <button onClick={criarViagem}>Enviar</button>
        </div>
    );
}