import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Painel(){

    const navigate = useNavigate()

    return (
        <div>
            <button onClick={() => navigate("/login")}>voltar</button>
            <button>Criar Viagem</button>
            <button>Logout</button>
        </div>
    )
}


