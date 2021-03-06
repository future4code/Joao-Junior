/* Exercícios de interpretação de código
a) O código testa pra saber se o resto da divisão entre o número dado por dois é igual a zero, caso seja, vai aparecer a mensagem "Passou no teste". Caso não seja, aparece a mensagem "Não passou no teste."
b) Aqueles que o resto é igual a zero.
c) Aqueles que o resto não é igual a zero.

2.
a) O Código acima " Switch case" serve para desviar a entrada do usuario para uma propriedade específica dentro de um quadro limitado de possibilidades.
b) Preço = 2.25
c) preço = 5.5
   preço = 5


3. 
a) A primeira linha pede para o usuário adicionar um valor
b) Quando digitado 10, aparece no console "Esse número passou no teste"
quando digitado -10, não aparece nada.
c) Sim. Pois o parametro "mensagem" não foi definida.



                Exercícios de escrita de código
*/

// 1. 

let idade = Number(prompt('Qual a sua idade?'))
if (idade > 18) {
    console.log(`Você pode dirigir.`)
} else {
    console.log('Você ainda não pode dirigir :(')
}

// 2.

let turno = prompt('Qual turno voce estuda? Digite M para matutino, V para vespertino e N para noturno.')
if (turno == 'M') {
    console.log('Bom Dia')
} else if (turno == 'V') {
    console.log('Boa Tarde!')
} else {
    console.log('Boa noite!')
}

// 3.
let turno = prompt('Qual turno voce estuda? Digite M para matutino, V para vespertino e N para noturno.')
switch (turno) {
    case 'M':
        console.log('Bom Dia!')
        break
    case 'V':
        console.log('Boa Tarde!')
        break
    case 'N':
        console.log('Boa Noite!')
        break
    default:
        console.log('Dados incorretos. Por favor tente novamente')
        break
}


// 4

let filme = prompt('Qual o gênero de filme que você vai assistir?')
let ingresso = Number(prompt('Qual o preçõ do ingresso?'))
if (filme == 'fantasia' && ingresso < 15){
    console.log('Bom filme!')
} else {
    console.log("Escolha outro filme :(")
}

/* Desafio
   1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem `"Bom filme!"`, pergunte ao usuário, pelo `prompt` qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens `"Bom filme!"` e `"Aproveite o seu [LANCHINHO]"`, trocando [LANCHINHO] pelo que o usuário colocou no input. */

let filme = prompt('Qual o gênero de filme que você vai assistir?')
let ingresso = Number(prompt('Qual o preçõ do ingresso?'))
let lanche = prompt('Qual lanchinho vai querer?')
if (filme == 'fantasia' && ingresso < 15){
    console.log('Bom filme!')
    console.log(`Aproveite o seu ${lanche}!`)
} else {
    console.log("Escolha outro filme :(")
} 


// 2.
/* Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:

- Nome completo;
- Tipo de jogo: IN indica internacional; e DO indica doméstico;
- Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
- Categoria: pode ser as opções 1, 2, 3 ou 4;
- Quantidade de ingressos

O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10) */
const domestico = {
    fi: { categoria1: 1980,
        categoria2: 1320,
        categoria3: 880,
        categoria4: 330
        },
    sf: {
        categoria1: 1320,
        categoria2: 880,
        categoria3: 550,
        categoria4: 220
    },
    dt: {
        categoria1: 660,
        categoria2: 440,
        categoria3: 330,
        categoria4: 170
    }
}

    
let nome = prompt('Nome completo')
let jg = prompt('Qual o tipo de jogo, doméstico DO  ou internacional IN?')
let jogo = jg.toUpperCase()
let etp = prompt('Qual etapado jogo, SF (Semi final), DT (terceiro lugar) ou FI (final)?')
let etapa = etp.toUpperCase()
let categoria = Number(prompt('Escolha uma das categorias seguintes: 1, 2 ,3 ou 4'))
switch(categoria){
    case 1:
        console.log(domestico.categoria1)
        break
    case 2:
        console.log(domestico.categoria2)
}


let quantidadeIngressos = Number(prompt('Quantos ingressos?'))

