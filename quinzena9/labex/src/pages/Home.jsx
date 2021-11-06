import React from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Viagens from './pages/Viagens'
import Login from './pages/Login'
import styled from 'styled-components'

const Button = styled.button`
    margin-bottom: 15px;
    height: 40px;
    padding: 0px 20px;
    border-radius: 20px;
    border: none;
    color: white;
    font-size: 16px;
    background-color: slategray;
    min-width: 100px;
`


export default function Home()  {

    const navigate = useNavigate()
    return (
    <div>
          <h1> Home </h1>
          <Button onClick={() => {
              navigate("/")
          }}>voltar</Button>
    </div>
    )
}


