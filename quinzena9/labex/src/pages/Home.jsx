import React from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Viagens from './Viagens'
import Login from './Login'
import styled from 'styled-components'




export default function Home()  {

    const navigate = useNavigate()
    return (
    <div>
          <h1> Home </h1>
          <button onClick={() => {
              navigate("/")
          }}>voltar</button>
    </div>
    )
}


