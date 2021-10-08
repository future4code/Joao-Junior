import React from 'react'


const CriarUsuario = ({prop, propChange, passValue}) => {
    return (
        <div >
            <h1>Labenusers</h1>
            <button 
            onClick={prop}
            onChange={propChange}>Trocar de página</button>
        
            <h2>Criar usuário</h2>
 
            <div className="nome-email">
            <input value={passValue} onChange={propChange} placeholder="nome"/>
            <input  placeholder="email"/>
            <button>Criar</button></div>
       </div>
    )
}

export default CriarUsuario
