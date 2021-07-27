/* Exercícios de interpretação de código. 
  1.
let array
console.log('a. ', array) Resp: a. undefined

array = null
console.log('b. ', array) Resp: b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) Resp: c. 11 

let i = 0
console.log('d. ', array[i]) Resp: d. 3

array[i+1] = 19
console.log('e. ', array) Resp: e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) Resp: f. 9

  2.
const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em marrocos"
 Resp: SUBI NUM ONIBUS EM MIRROCOS 27
*/
/* Exercicio de escrita de código
   1.

let nome = prompt("Qual o seu nome?")
let email = prompt("Qual o seu email?")
console.log(`O e-mail ${email} foi cadastrado com sucesso. 
Seja bem-vindo, ${nome}!`)
   2.*/


/*
   a) e b) //console.log(favFood)
console.log(`Essas são as minhas comidas preferidas:
${favFood[0]}
${favFood[1]}
${favFood[2]}
${favFood[3]}
${favFood[4]}`) */
// c)
/* let food = ["moqueca", "lasanha", "caldo de camarão", "churrasco", "Pão-de-alho"]
let usuario = prompt("Qual a sua comida favorita?")
food.splice(1,1,usuario)
console.log(`Então a nova lista é ${food}`) */

// 3.
let listaDeTarefas = []
let tarefa1 = prompt("primeira tarefa?")
let tarefa2 = prompt("Segunda tarefa")
let tarefa3 = prompt("terceira tarefa")

listaDeTarefas.push(tarefa1,tarefa2,tarefa3)
console.log(listaDeTarefas)
let usuario = prompt("Qual tarefa voce ja realizou?")
listaDeTarefas.splice(usuario,1)
console.log(`A nova lista é ${listaDeTarefas}`)
