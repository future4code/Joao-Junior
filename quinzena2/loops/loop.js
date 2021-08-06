//                  Exercícios de interpretação de código
// 1. o código está incrementando valor em loop até o número 4, após, irá imprimir valor + i sendo i == 4.  
/* 2.
a) [19,21,23,25,30]
b)const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero[i] of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

3.
*
**
***
****
                    Exercícios de escrita de código
*/
// 1.a) b) e c)

let bichos = Number(prompt('Quantos animais voce tem?'))
if ( bichos == 0 ){
    console.log('Que pena. você pode adotar um pet!')
} for (let i = 0; i < bichos;i++){
    let arrayanimais = []
    let nomePet = prompt("Qual o nome de seu pet?")
    arrayanimais = nomePet
    console.log(nomePet)
}
// 2. 

const oliver = [2,4,6,8,10,12,14,23,25,27,29]

// a)
for (let numero of oliver){
    console.log(numero)
}

// b)
for (let numero of oliver){
    console.log(numero/10) 
}
// c)
function retornaPar(oliver){
let par = []
for (let i = 0; i < oliver.length; i++){
  if (oliver[i] % 2 == 0){
   par.push(oliver[i])
  }
}
return par
}
console.log(retornaPar(oliver))

// d)

function novoArray() {
    let arrayString = []
    let i = 0
    for (let numerosArray of oliver) {
        arrayString.push(`O elemento do índex ${i} é: ${numerosArray}`); i++;

    }
    return arrayString
}
 console.log(novoArray())

 // e)
 function maioreMenor() {

    let maiorNumero = 0
    let menorNumero = 9999
    for (let numeros of oliver) {
    if (numeros > maiorNumero) {
       maiorNumero = numeros
       } if (numeros < menorNumero) {
           menorNumero = numeros
       } 
    }
    return [maiorNumero, menorNumero]

   }

   let retorno = maioreMenor()
   console.log(`Maior número é: ${retorno[0]} e o menor é:${retorno[1]}`) 