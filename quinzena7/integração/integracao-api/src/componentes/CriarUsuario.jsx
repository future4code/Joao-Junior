import React from 'react'


const CriarUsuario = () => {
    return (
        <div >
            <h1>Labenusers</h1>
            <button>Trocar de página</button>
        
            <h2>Criar usuário</h2>
 
            <div className="nome-email">
            <input  placeholder="nome"/>
            <input  placeholder="email"/>
            <button>Criar</button></div>
       </div>
    )
}

export default CriarUsuario
