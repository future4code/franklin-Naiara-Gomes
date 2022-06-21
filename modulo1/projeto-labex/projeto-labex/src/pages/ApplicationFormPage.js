import React from "react";
function ApplicationFormPage() {
    return (
        <div>
            <h1>Inscreva-se para uma viagem</h1>
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
            <button>Voltar</button>
            <button>Enviar</button>
        </div>
    );
}
export default ApplicationFormPage;