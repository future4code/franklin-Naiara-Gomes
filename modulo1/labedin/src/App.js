import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQHR20fJMAL3Rw/profile-displayphoto-shrink_800_800/0/1651968714100?e=1658966400&v=beta&t=fYI2-eQjiI_ffXp62h5NOpfZ9IKdkPceNBYRulZiFGo" 
          nome="Naiara Gomes" 
          descricao="Através do programa Desenvolve da Boticário iniciei minha carreira como desenvolvedora Full Stack. 
          Adoro desafios, estou sempre estimulando minha capacidade analítica, gosto de inovar, propor novas ideias que possam melhorar o trabalho e os processos a serem realizados.
          "
        />
        
        <ImagemButton 
          imagem="https://i.pinimg.com/originals/09/0a/ea/090aea0be7fa8331086ce7023350ef0a.png" 
          texto="Ver mais"
        />
<CardPequeno
          imagem="data:image/png;base64,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" 
          texto="Email: naiaragms2018@gmail.com"
        />
<CardPequeno
          imagem="https://i.pinimg.com/originals/88/bc/00/88bc005a6b728cafbf76668607205b25.jpg" 
          texto="Feira de Santana, Bahia"
        />


      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQE2uTXvISMMwA/company-logo_200_200/0/1625143274996?e=1661385600&v=beta&t=IB_HYPduOgDUkn2mFNgbuwrJSwAuak5xEZwWiwhKZTo" 
          nome="Boticario" 
          descricao="Developer I at Grupo Boticário" 
        />
        
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQGDHmZO7yXF7g/company-logo_200_200/0/1646332181764?e=1661385600&v=beta&t=CSLHsgwFuqlgUuD9Gsx1Qfpr8Fbekw3KlLCVpdBSPuE" 
          nome="Estação 11" 
          descricao="Auxiliar Fiscal" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
