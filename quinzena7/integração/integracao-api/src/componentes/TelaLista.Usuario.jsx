import React from 'react'



export default class TelaListaUsuarios extends React.Component {
    render () {
        return (
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <div>Lista de Usuários</div>     
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