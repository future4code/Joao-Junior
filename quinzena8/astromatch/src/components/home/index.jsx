import React from 'react'

const index = () => {
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

export default index
