import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import joao from './components/Imagem/perfilcurriculo.png';
import email from './components/Imagem/icone_email.png';
import localizacao from './components/Imagem/icone_local.png';
import styled from 'styled-components';


const PageSectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;`
function App() {
  return (
    <div className="App">
      <PageSectionContainer>
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={joao}
          nome="João Hélio" 
          descricao="Oi, meu nome é João. Sou professor de inglês e estou fazendo transição de carreira para programação. Estou gostando muito desta aventura."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
        <div>
         <CardPequeno className= "smallcard-container" imagem={email} Email="Email:bsbvjoao@gmail.com" />
        </div>
        <div>
        <CardPequeno className= "smallcard-container" imagem={localizacao} Endereço="Rua dos Devs." />
        </div>
      </PageSectionContainer>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
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
