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