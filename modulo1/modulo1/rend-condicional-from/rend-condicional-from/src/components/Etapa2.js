

const Etapa2 = (props) => {
    const {irParaProximaEtapa} = props
    return (
      <div>
       <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
       <ul>
         <li>5. Qual o curso?</li>
         <input type="text" placeholder="Digite o nome do curso"></input>
         
         <li>6. Qual a unidade de ensino?</li>
         <input type="text" placeholder="Digite nome da unidade de ensino"></input>
         
       </ul>
      </div>
    );
  }
  
  export default Etapa2;