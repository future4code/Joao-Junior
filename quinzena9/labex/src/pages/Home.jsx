import React from 'react'
import { useNavigate } from 'react-router-dom'

import Login from './Login'
import styled from 'styled-components'

const Container = styled.div`
    text-align: center;
    width: 100vw;
    `
    
    
    
export default function Home()  {
    
        const navigate = useNavigate()
        return (
        <Container>
              <h1> Home </h1>
              <button onClick={() => {navigate("/viagens")}}>Viagens</button>
              <button onClick={() => {navigate("/login")}}>Login</button>
        </Container>
        )
    }



