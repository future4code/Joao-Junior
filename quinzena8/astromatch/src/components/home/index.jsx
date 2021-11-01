import React, { useState } from 'react'
import imagem from '../../imagens/imagemteste.jpg'
import astromach from '../../imagens/astromach.png'
import Match from '../matches/Match.jsx'
import styled from '../home/style.css'

const Index = (changePage) => {

 

    return (
        
            <div className="global">
                

                    <div className='header-index'>
                        <h1 className='astromatch-name'>Astromatch</h1>

                        <div className='div-button'>
                            <button className='button-contatos'>
                                 Contatos
                            </button>
                        </div>

                    </div>



                    <div className='container-img-nome-dade-desc'>
                     <div className='wrap-imagem'>
                         <div class="sc-bwzfXH">
                            </div>                            
                            <img  className='imagem-avatar' src={imagem} alt="imagem-teste" />
                     </div>
                        <div className='nome-idade-descricao'>
                            <div className='nome-idade'>

                            <div className='nome'>
                                <p className='nome-index'>Abul</p>
                            </div>

                            <div className='idade'>
                                <p>28</p>
                            </div>

                            </div>
                            <p className='descricao'>Kaizoku oni ore wa naru!</p>
                            
                        </div>
                        <div className='button-aceita-cancela'>
                        <button className='button-cancela'>X</button>
                        <button className='button-aceita'>♥</button>
                        </div>
                    </div>
                    

                     
                </div>
         
             
        
    )
}

export default Index
