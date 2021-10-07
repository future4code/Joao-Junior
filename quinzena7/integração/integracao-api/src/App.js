
import './App.css';
import axios from 'axios'
import React from 'react'
import CriarUsuario from './componentes/CriarUsuario'
import Lista from './componentes/Lista'


export default class App extends React.Component {
  state = {
    clicou: true,
  }

  renderizaTela = () => {
    if (this.state.clicou) {
      return (
        <CriarUsuario prop={this.trocarPagina}/>
      )
    } else {
      return (
        <Lista prop={this.trocarPagina}/>
      )
    }
  }

  trocarPagina = () => {
    this.setState({clicou: !this.state.clicou})
  }

  render () {
    return (
      <div className="App">
        {this.renderizaTela()}
      </div>
    );
  }
  }


