import React from 'react';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
    width: 100vw;
`
const InputContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`

export default function Login(){

    const navigate = useNavigate()

    return(
        <Container>
        <h1>Login</h1>
        <InputContainer>
            <input type="text" />
            <input type="password" name="password" placeholder='' id="" />
        </InputContainer>

        <div>
            <button onClick={() => navigate("/")}>Voltar</button>
            <button>Entrar</button>
        </div>
        </Container>
    )
}