import React from 'react'
import axios from "axios"

export default class TelaCadastro extends React.Component {
    state = {
        nome: "",
        email: ""
    }

    handleNome = (e) => {
        this.setState({nome: e.target.value})
    }

    handleEmail = (e) => {
        this.setState({email: e.target.value})
    }

    fazerCadastro = () => {
       const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
       const body = {
           name: this.state.nome,
           email: this.state.email
       }     

       axios.post(url, body, {
           headers: {
            Authorization: "joao-helio-banu"
           }
       })
       .then((res) => {
            alert("Usuário Cadastrado com sucesso!")
            this.setState({nome: "", email: ""})
       })
       .catch((err) => {
           const erro = err.response.data.message ? "Usuário já cadastrado" : ""
           alert(erro)
           this.setState({nome: "", email: ""})
            
       })
    }


    render () {
        return (
            <div>
                <button onClick={this.props.irParaLista}>ir para Lista de Usuários</button>
                <h2>Cadastro</h2> 
                <input 
                placeholder={'Nome'}
                value={this.state.nome}
                onChange={this.handleNome} />

                <input 
                placeholder={'E-mail'}
                value={this.state.email}
                onChange={this.handleEmail} />
                <button onClick={this.fazerCadastro}>Cadastrar</button>    
            </div>
            )
        }
    }
            
   
































/* const CriarUsuario = ({prop, propChange, passValue}) => {
    return (
        <div >
            <h1>Labenusers</h1>
            <button 
            onClick={prop}
            onChange={propChange}>Trocar de página</button>
        
            <h2>Criar usuário</h2>
 
            <div className="nome-email">
            <input value={passValue} onChange={propChange} placeholder="nome"/>
            <input  placeholder="email"/>
            <button>Criar</button></div>
       </div>
    )
}

export default CriarUsuario */
