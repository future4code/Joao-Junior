import React, { useState } from 'react';
import './App.css';
import imagem from './imagens/imagemteste.jpg'
import  Match  from './components/matches/Match'
import Index from './components/home/Index'



function App() {

const [pageName, setpageName] = useState("home")
 
const getPagina = () => {
  switch (pageName) {
    case "home":
      return <Index/>
    case "matches":
      return <Match/>
      default:
        return <Index/>
  }
}
  
const changePage = () =>{
  if(pageName === "home") {
    setpageName("matches")
  } else {
    setpageName('home')
  }
}

  return (

    <div className="App">
      
      {getPagina()}

      <button className='button-trocar-pagina' onClick={changePage} changePage={changePage}> {pageName === "home"? "Matches" : "Home"} </button>
      <button className='button-limpar-matches'>Limpar Matches</button>
          
    </div>
      


      );
    }




    

export default App;
