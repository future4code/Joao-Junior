import './App.css';
import axios from 'axios'
import React from 'react'

import TelaCadastro from './componentes/TelaCadastro';
import TelaListaUsuarios from './componentes/TelaLista.Usuario';

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

const headers = {
  headers: {
    Authorization: "joao-helio-banu"
  }
}


export default class App extends React.Component {
  state = {
    telaAtual: "cadastro",
  }
  
  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista} />
      case "lista":
        return <TelaListaUsuarios irParaCadastro={this.irParaCadastro} />
        default:
          return <div> Erro! Página não encontrada.</div>
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }

  render() {
    return (
      <div className='App-container'>
        {this.escolheTela()}
      </div>
      )
    }
  }
        
    













































 /*  componentDidMount() {
    this.pegarUsers()
  }

  pegarUsers = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',{     
    headers: {
      Authorization: "joao-helio-banu",
    }
    })
    .then((response) => {
      this.setState({ allUsers: response.data.result.list})
    })
    .catch((err) => console.log(err))
  }

  criarUsers = () => {
    const body = {
      name: this.state.getUsers
    };

    axios
      .post(url, body, headers)
      .then((res) => {
        console.log(res);
        this.setState({ getUsers: "" });
        this.pegarUsers();
      })
      .catch((err) => console.log(err));
  };

  onChangegetUsers = (event) => {
    this.setState({ getUsers: event.target.value });
  };

 

  renderizaTela = () => {
    if (this.state.telaAtual) {
      return (
        <CriarUsuario prop={this.trocarPagina} propChange={this.onChangegetUsers} passValue={this.passValue}/>
      )
    } else {
      return (
        <>
        <Lista prop={this.trocarPagina} propChange={this.onChangegetUsers}/>
        
        </>
      )
    }
  }

  trocarPagina = () => {
    this.setState({telaAtual: !this.state.telaAtual})
  }

 

  render () {
    const listaUsers = this.state.allUsers.map((allUsers) => {
      return <li key={allUsers.id}>{allUsers.name}</li>
    })
    return (
      <div className="App">
        {this.renderizaTela()}
        <ul>{listaUsers}</ul>
      </div>
    );
  }
  }


 */