// EXERCÍCIO 01
function inverteArray(array) {
    let saida = []
    while (array.length){
     saida.push(array.pop())
    } 
     return saida
}
    inverteArray()

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let numerosPares = array.filter(n => n%2 == 0)
  let numerosParesAoQuadrado = numerosPares.map( n =>
     (Math.pow(n,2)))
    return numerosParesAoQuadrado   
    
}
retornaNumerosParesElevadosADois()
// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let numerosPares = array.filter(n => (n%2 == 0))
  return numerosPares
 }
 
 retornaNumerosPares()


// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = array.reduce(function(a,b) {
    return Math.max(a,b)
  })
  return maiorNumero
}
  
  retornaMaiorNumero()


// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  let parametros = array.length
  return parametros
}
retornaQuantidadeElementos()

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
const respostas = []
const booleano1 = true
const booleano2 = false
const booleano3 = !booleano2 
const booleano4 = !booleano3 
let boo1 = booleano1 && booleano2 && !booleano4 
let boo2 = (booleano1 && booleano2) || !booleano3 
let boo3 = (booleano2 || booleano3) && (booleano4 || booleano1) 
let boo4 = !(booleano2 && booleano3) || !(booleano1 && booleano3) 
let boo5 = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
let adiciona1 = respostas.push(boo1)
let adiciona2 = respostas.push(boo2)
let adiciona3 = respostas.push(boo3)
let adiciona4 = respostas.push(boo4) 
let adiciona5 = respostas.push(boo5)
return respostas
}
retornaExpressoesBooleanas()

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  const arrayPar = []
  for (let numero = 0;arrayPar.length < n;numero++) {
    if (numero % 2 === 0) {
      arrayPar.push(numero)
    }
  }
  return arrayPar
}

retornaNNumerosPares()

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  let ladoA = a
  let ladoB = b
  let ladoC = c
  if (ladoA == ladoB && ladoB == ladoC && ladoC == ladoA){
    return 'Equilátero'
  } else if (ladoA == ladoB || ladoB == ladoC || ladoC == ladoA){
    return 'Isósceles'
  } else {
    return 'Escaleno'
  }
}
checaTriangulo()

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let maiorNumero
  let menorNumero
  let maiorDivisivelPorMenor

  if (num1 > num2){
    maiorNumero = num1
    menorNumero = num2
  } else {
    maiorNumero = num2
    menorNumero = num1
  }
  
  maiorDivisivelPorMenor = maiorNumero % menorNumero == 0
  const diferenca = maiorNumero - menorNumero

  return {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca
  }

}

comparaDoisNumeros()

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let segundoMaioreMenor = []

  let min = Math.min.apply(null, array)
    array.splice(array.indexOf(min), 1)
  let max = Math.max.apply(null, array) 
    array.splice(array.indexOf(max), 1)     
  
  
      segundoMaioreMenor.push(Math.min.apply(null,array))
      segundoMaioreMenor.push(Math.max.apply(null, array))
      
  
      return segundoMaioreMenor.reverse()
}
segundoMaiorEMenor()

// EXERCÍCIO 11
function ordenaArray(array) {
const tamanho = array.length
  for (let i = 0;i < tamanho;i++) {
    for (let j = 0;j < tamanho;j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = tmp
      }
    }
  }
  return array 
}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
