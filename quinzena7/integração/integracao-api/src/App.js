
import './App.css';
import axios from 'axios'
import React from 'react'
import CriarUsuario from './componentes/CriarUsuario'
import Lista from './componentes/Lista'


export default class App extends React.Component {
  state = {
    clicou: true
  }
  render () {
    return (
      <div className="App">
        <CriarUsuario />
        <Lista />
      </div>
    );
  }
  }


