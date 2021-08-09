/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
// 8)
    /* let pergunta = confirm('Quer iniciar uma nova rodada?')
        if (pergunta){
         let usuario1Carta = comprarCarta()
         let usuario2Carta = comprarCarta()
         if (usuario1Carta.texto && usuario2Carta.texto === "A"){
            let usuario1Carta = comprarCarta()
            let usuario2Carta = comprarCarta()
         }

         let computador1Carta = comprarCarta()

         let confirmação = confirm(`Suas cartas são ${usuario1Carta.texto} ${usuario2Carta.texto}. A carta revelada do computador é ${computador1Carta.texto} Voce deseja comprar mais uma carta?`)
            if (!confirmação){
               console.log("ok")
            }
            let computador2Carta = comprarCarta()

            if (computador1Carta.texto && computador2Carta.texto === "A" ){
            let computador1Carta = comprarCarta()
            let computador2Carta = comprarCarta()
         }
         let somaUsuario = usuario1Carta.valor + usuario2Carta.valor
         let somaPc = computador1Carta.valor + computador2Carta.valor

         console.log(`Usuário - cartas:${usuario1Carta.texto} ${usuario2Carta.texto}  - pontuação ${somaUsuario}`)
         console.log(`Computador - cartas: ${computador1Carta.texto} ${computador2Carta.texto}  - pontuação ${somaPc}`)
         if (somaUsuario > somaPc){
            console.log("Usuario venceu!")
         } else if (somaUsuario < somaPc){
            console.log('Computador venceu!')
         } else if (somaUsuario == somaPc){
            console.log('Empate!')
         }


      } else {
         console.log('O jogo acabou.')
      } */
