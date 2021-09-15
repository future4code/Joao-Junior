import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
  }

  onClickCurtida = () => {
    console.log('Curtiu!')
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post

/* Questão 4

O valor icone invoca as variaveis iconeComentario/iconeCurtida.
IconeCurtida encontra-se no escopo dentro do render (), enquanto
iconeComentario é importado da pasta img.

O onClickIcone trás a função onClickComentario da Class Post.

O valorContador trás duas propriedades do objeto state. sendo elas,
numeroCurtidas e numeroComentarios.
 
  Questão 5

Ele conta o número de comentários.

  Questão 6

 o state.curtido é usado no PostFooter através da variavel iconeCurtida atribuida ao valor icone. 
 o state.numeroCurtidas é usado tbm no PostFooter através do this.state.numeroCurtidas atribuido ao valorContador. 

 o state.comentando é usado através da arrow function this.onClickComentário
 atribuida ao valor onClickIcone.

 Questão 9

 Ela nega o estado inicial da propriedade comentando.

 Questão 10.

 Ao clicar, aparece o campo de comentários. Isto acontece porque o estado incial 
 de comentando é alterado para true, mostrando o campo.

 Questão 11.
 
 Se a condição abaixo for realizada, o componente é ativado e a seção de 
 comentarios é ocultada.
 if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }
*/