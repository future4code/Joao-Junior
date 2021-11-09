import React from 'react';
import { BrownseRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';


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

export default function Inscrevase() {

const navigate = useNavigate()

    return(
        <Container>
            <h1>Inscreva-se para uma viagem</h1>
            <InputContainer>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </InputContainer>

            <div>
                <button onClick={() => navigate("/")}>Voltar</button>
                <button >Enviar</button>
            </div>
                
        </Container>
        )
}