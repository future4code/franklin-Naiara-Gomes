const Etapa3 = (props) => {
    const {irParaProximaEtapa} = props
    return (
      <div>
       <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
       <ul>
         <li>5. Por que você não terminou o curso de graduação?</li>
         <input type="text" placeholder="Digite o motivo"></input>
         
         <li>6. Você fez algum curso complementar?</li>
         <select>
             <option>Nenhum</option>
             <option>Curso Tecnico</option>
             <option>Curso de inglês</option>
    
         </select>
         
         
         
  
  
       </ul>
      </div>
    );
  }
  
  export default Etapa3;