/* 
exercicio de interpretação de código
Respostas
1.10,5 
2.10,10,10
3.
    let horas = prompt("Quantas horas você trabalha por dia?")
    let renda = prompt("Quanto você recebe por dia?")
    alert(`Voce recebe ${renda/horas} reais por hora`) 

Exercício de Escrita de código

1.a) Declare uma variável para armazenar um nome, sem atribuir um valor.
  b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
  c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.*/
  /*let nome  
  let idade 
  console.log(typeof nome)
  console.log(typeof idade)*/
   /* 
  d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.*/
    // acredito que por conta do valor não ter sido atribuido.
/*
  e) pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar 
  f)Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
  Agora, temos saidas com valores atribuidos string e string enquanto os primeiros estao como any.
  g) Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu*/

let nome = prompt("olá, qual o seu nome?")
let idade = prompt("Qual a sua idade?")
console.log(typeof nome)
console.log(typeof idade)
alert(`Olá ${nome}, voce tem ${idade} anos`)




/*2. escreva um programa que faça 3 perguntas de sim ou não, armazenando cada uma em uma variavel.*/

let cidade = prompt("Você mora em Salvador?")
let estado = prompt("Você mora na Bahia?")
let cozinha = prompt("Você sabe cozinhar?")