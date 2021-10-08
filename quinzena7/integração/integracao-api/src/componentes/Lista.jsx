import React from 'react'

const Lista = ({ prop, propChange }) => {
    return (
        <div>
            <h1>Labenusers</h1>
            <button onClick={prop}>Trocar de página</button>
            <h2>Lista de Usuários</h2>
        </div>
    )
}

export default Lista
