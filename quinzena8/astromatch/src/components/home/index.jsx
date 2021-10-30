import React, { useState } from 'react'
import imagem from '../../imagens/imagemteste.jpg'
import Match from '../matches/Match'

const Index = () => {

    // const [pageName, setpageName] = useState("home")
 
    // const getPagina = () => {
    //   switch (pageName) {
    //     case "home":
    //       return <Index/>
    //     case "matches":
    //       return <Match/>
    //       default:
    //         return <Index/>
    //   }
    // }
      
    // const goMatch = () =>{
    //   setpageName("matches")
    // }

    return (
        
            <div className="App">
                <div className="container">

                    <div className='header'>
                        <h1 className="astromatch-head">astromatch</h1> 

                        <button className='button-contatos'> Contatos </button>
                    </div>

                    <img  className='imagem-avatar' src={imagem} alt="imagem-teste" />

                     <div>
                        <button>cancela</button>
                        <button>Aceita</button>
                    </div>
                </div>
         
             </div>
        
    )
}

export default Index
