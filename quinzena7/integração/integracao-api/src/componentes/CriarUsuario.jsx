import React from 'react'


const CriarUsuario = ({prop}) => {
    return (
        <div >
            <h1>Labenusers</h1>
            <button onClick={prop}>Trocar de página</button>
        
            <h2>Criar usuário</h2>
 
            <div className="nome-email">
            <input  placeholder="nome"/>
            <input  placeholder="email"/>
            <button>Criar</button></div>
       </div>
    )
}

export default CriarUsuario
