import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    text-align: center;
    width: 100vw;
    `

export default function Painel(){

    const navigate = useNavigate()

    return (
        <Container>
            <h1>Painel Administrativo</h1>
            <button onClick={() => navigate("/login")}>voltar</button>
            <button>Criar Viagem</button>
            <button>Logout</button>
        </Container>
    )
}


