import React from 'react';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import axios from 'axios';

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

    const [ email, setEmail] = useState("")
    const [ password, setPassword] = useState("")
    const navigate = useNavigate()

    const login = () => {
        const body = {
            email,
            password
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:joao-helio-banu/login").then(response => {
            localStorage.setItem("token", response.data.token)
        }).catch(err => {
            return console.log(err)
        })
    }

    return(
        <Container>
        <h1>Login</h1>
        <InputContainer>
            <input type="text" />
            <input type="password" name="password" placeholder='Senha' id="nav" />
        </InputContainer>

        <div>
            <button onClick={() => navigate("/")}>Voltar</button>
            <button>Entrar</button>
        </div>
        </Container>
    )
}