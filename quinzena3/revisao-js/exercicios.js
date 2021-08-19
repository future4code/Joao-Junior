// EXERCÍCIO 01
function inverteArray(array) {
  let saida = []
    while (array.length){
     saida.push(array.pop()) //Usa o push para incluir na var saida
    } 
      return saida
}
    inverteArray()

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let numerosPares = array.filter(n => n%2 == 0) // filtra os pares
  let numerosParesAoQuadrado = numerosPares.map( n =>
     (Math.pow(n,2))) // eleva numeros ao quadrado
    return numerosParesAoQuadrado   
    
}
retornaNumerosParesElevadosADois()
// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let numerosPares = array.filter(n => (n%2 == 0)) // filtra os numeros pares
    return numerosPares
 }
 


// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = array.reduce(function(a,b) {
    return Math.max(a,b) //.reduce executa a função callback. function(a,b) identifica elementos da array e retorna maior numero
  })
    return maiorNumero
}
  
  


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


// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  const arrayPar = []  
  for (let numero = 0;arrayPar.length < n;numero++) { 
    if (numero % 2 === 0) {  // condição par. 
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



// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  // Tentei de outra forma mas nao obtive resultado, então usei o modelo sugerido.
  let menor = Infinity
  let maior = -Infinity
  let segundoMenor = Infinity
  let segundoMaior = -Infinity
  let novoArray = []

  for (let i of array) {
    if (i < menor) {
      menor = i
    }
    if (i > maior) {
      maior = i
    }
  }

  for (let i of array) {
    if (i < segundoMenor && i !== menor) {
      segundoMenor = i
    }
    if (i > segundoMaior && i !== maior) {
      segundoMaior = i
    }
  }
  novoArray.push(segundoMaior)
  novoArray.push(segundoMenor)

  return novoArray
}


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
  let filme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }

  return filme
}

// EXERCÍCIO 13
function imprimeChamada() {
  let filme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }

  let atoresConcat = ""
  for (let i = 0;i < filme.atores.length;i++) {
    if (i === filme.atores.length - 1) {
      atoresConcat += filme.atores[i]
    } else {
      atoresConcat += filme.atores[i] + ", "
    }
  }

  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atoresConcat}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2
  }

  return retangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  return {
    ...pessoa,    // ... altera específico do objeto por nome dado.
    nome: 'ANÔNIMO'
  }
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
