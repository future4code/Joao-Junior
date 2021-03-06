import React from 'react'
import axios from 'axios'
import styled from "styled-components"


const CardUsuario = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
`

export default class TelaListaUsuarios extends React.Component {
    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = async() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
       /*  axios.get(url, {
            headers: {
                Authorization: "joao-helio-banu"
            }
        })
        .then((res) => {
            this.setState({usuarios: res.data})
        })
        .catch((err) => {
            alert("Erro. tente novamente")
        }) */
        try {
            const res = await axios.get(url, {
                headers: {
                    Authorization: "joao-helio-banu"
                }
            })
            this.setState({usuarios: res.data})

        } catch (err) {
            alert("Erro. tente novamente")
        }
    }

    deletarUsuario = (id) => {
       const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
       axios.delete(url, {
           headers: {
            Authorization: "joao-helio-banu"
           }
       })
       .then((res) => {
           alert("Usuário excluído")
           this.pegarUsuarios()
       })
       .catch((err) => {
           alert("Erro. Tente novamente.")
       })
    }

    render () {
        const listaUsuarios = this.state.usuarios.map((user) => {
            return (
            <CardUsuario key={user.id}>
                {user.name}
                <button onClick={() => this.deletarUsuario(user.id)}>x</button>
            </CardUsuario>
            )
        })
        return (
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <div>Lista de Usuários</div> 
                {listaUsuarios}    
            </div>
            )
        }
    }
            



























/* const Lista = ({ prop, propChange }) => {
    return (
        <div>
            <h1>Labenusers</h1>
            <button onClick={prop}>Trocar de página</button>
            <h2>Lista de Usuários</h2>
        </div>
    )
}

export default Lista
 */