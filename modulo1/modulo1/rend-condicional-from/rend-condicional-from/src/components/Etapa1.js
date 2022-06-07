//import logo from './logo.svg';

const Etapa1 = (props) => {
  const { irParaProximaEtapa } = props;
  return (
    <div>
      <h1>ETAPA 1 - DADOS GERAIS</h1>
      <ul>
        <li>1. Qual seu nome?</li>
        <input type="text" placeholder="Digite seu nome"></input>

        <li>2. Qual sua idade?</li>
        <input type="text" placeholder="Digite sua idade"></input>

        <li>3. Qual seu email?</li>
        <input type="text" placeholder="Digite seu email"></input>

        <li>4. Qual a sua ecolaridade?</li>
        <select>
          <option>Ensino médio incompleto</option>
          <option>Ensino médio completo</option>
          <option>Ensino superior incompleto</option>
          <option>Ensino superior completo</option>
        </select>
      </ul>
    </div>
  );
};

export default Etapa1;
