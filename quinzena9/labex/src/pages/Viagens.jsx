import React from 'react'
import { BrownseRouter, Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const Viagens = () => {

    const navigate = useNavigate()

    return (
        <div>
         <h1>Viagens</h1>
         <button >voltar</button>   
            
        </div>
    )
}

export default Viagens
