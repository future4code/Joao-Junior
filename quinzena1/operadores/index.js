/* const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) //false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) //false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) //true

console.log("d. ", typeof resultado) //boolean

// 2) Questão

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma) */ 
// 3)faltou o Number para alterar as variaveis de string para numero/

// Exercícios de escrita de código
// 1)
/* const idade = Number(prompt("Qual a sua idade?"))
const idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))
const comparacao = idade > idadeAmigo
console.log("Sua idade é maior que a do seu melhor amigo?", comparacao)
console.log("A diferença de idade é de",idade - idadeAmigo, "anos.")
 */
// 2)a,b)
/* const par = Number(prompt("Insira um numero par"))
console.log(par % 2) */
 // c) O resto sempre é zero.
 // d) O resto vai mudando.
 // 3)
 /* const idade = Number(prompt("Quantos anos voce tem?"))
 console.log("Sua idade em meses é", idade*12)
 console.log("Sua idade em dias é", idade*365)
 console.log("Sua idade em horas é", idade*8760) */
 // 4)
 const n1 = Number(prompt("numero"))
 const n2 = Number(prompt("numero 2"))
 console.log("O primeiro numero é maior que segundo?", n1>n2)
 console.log("O primeiro numero é igual ao segundo?", n1 == n2)
 console.log("O primeiro numero é divisível pelo segundo?", n1%n2 == 0)
 console.log("O segundo numero é divisível pelo primeiro?", n2%n1 == 0)