import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div`
    text-align: center;
    width: 100vw;
`

const Viagens = () => {

    const navigate = useNavigate()

    return (
        <Container>
         <h1>Viagens</h1>
         <button onClick={() => navigate("/")}>voltar</button>
         <button onClick={() => navigate("/inscrevase")}>Inscreva-se</button>   
            
        </Container>
    )
}

export default Viagens
