import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import axios from 'axios';
import { login } from '../services/index'

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
        // Estados e Routers
    const [ email, setEmail] = useState("")
    const [ password, setPassword] = useState("")
    const navigate = useNavigate()
            // Funções

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onCLickLogin = async () => {
        const response = await login({
            email,
            password
        })
        if(response.token){
            localStorage.setItem("token", response.token)
            navigate("/painel")
        } else {
            alert(response.error.data.message)            
        }
       
    }
          

    return(
        <Container>
        <h1>Login</h1>

        <InputContainer>
            <p>Email</p>
            <input value={email} onChange={onChangeEmail} type="text" placeholder="Email" />
            <p>Senha</p>
            <input value={password} onChange={onChangePassword} type="password" name="password" placeholder='Senha' id="nav" />
        </InputContainer>

        <div>
            <button onClick={() => navigate("/")}>Voltar</button>
            <button onClick={onCLickLogin}>Entrar</button>
        </div>
        </Container>
    )
}