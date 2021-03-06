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
    
    let novoNumeroCurtidas 

    if(this.state.curtido) {
      novoNumeroCurtidas = this.state.numeroCurtidas - 1
    } else {
      novoNumeroCurtidas = this.state.numeroCurtidas + 1
    }

    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: novoNumeroCurtidas
    })
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

/* Quest??o 4

O valor icone invoca as variaveis iconeComentario/iconeCurtida.
IconeCurtida encontra-se no escopo dentro do render (), enquanto
iconeComentario ?? importado da pasta img.

O onClickIcone tr??s a fun????o onClickComentario da Class Post.

O valorContador tr??s duas propriedades do objeto state. sendo elas,
numeroCurtidas e numeroComentarios.
 
  Quest??o 5

Ele conta o n??mero de coment??rios.

  Quest??o 6

 o state.curtido ?? usado no PostFooter atrav??s da variavel iconeCurtida atribuida ao valor icone. 
 o state.numeroCurtidas ?? usado tbm no PostFooter atrav??s do this.state.numeroCurtidas atribuido ao valorContador. 

 o state.comentando ?? usado atrav??s da arrow function this.onClickComent??rio
 atribuida ao valor onClickIcone.

 Quest??o 9

 Ela nega o estado inicial da propriedade comentando.

 Quest??o 10.

 Ao clicar, aparece o campo de coment??rios. Isto acontece porque o estado incial 
 de comentando ?? alterado para true, mostrando o campo.

 Quest??o 11.
 
 Se a condi????o abaixo for realizada, o componente ?? ativado e a se????o de 
 comentarios ?? ocultada.
 if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }
*/