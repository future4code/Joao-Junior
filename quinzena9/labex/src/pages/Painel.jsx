import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { getTripDetails } from '../services/index'
import { useEffect } from 'react'

const Container = styled.div`
    text-align: center;
    width: 100vw;
    `

export default function Painel(){
    const navigate = useNavigate()
    useEffect(() => {
        const fetch = async () => {
            const token = localStorage.getItem("token")
            const response = await getTripDetails(token, "QuWBcnjEQXAlxjLtAjLS")
            console.log(response)
        }
        fetch()
    }, [])    

    return (
        <Container>
            <h1>Painel Administrativo</h1>
            <button onClick={() => navigate("/login")}>voltar</button>
            <button>Criar Viagem</button>
            <button>Logout</button>
        </Container>
    )
}


