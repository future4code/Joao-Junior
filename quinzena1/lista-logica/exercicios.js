// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const base = Number(prompt('area1'))
  const altura = Number(prompt('area2'))
  const area = base*altura
  console.log(area)
}

// Exercício 2
function imprimeIdade() {
  const anoAtual = Number(prompt('valor'))
  const anoNascimento = Number(prompt('valor'))
  const result = anoAtual - anoNascimento
  console.log(result)
}

// Exercício 3
function calculaIMC() {
  const peso = Number(prompt('valor'))
  const altura = Number(prompt('valor'))
  const resultado = peso/(altura*altura)
  console.log(resultado)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nome = prompt('texto')
  const idade = Number(prompt('texto'))
  const email = prompt('text')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  const cor1 = prompt('texto')
  const cor2 = prompt('texto')
  const cor3 = prompt('texto')
  const todas = [cor1,cor2,cor3]
  console.log(todas)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  const texto = prompt('texto')
  console.log(texto.toLocaleUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  const custo = Number(prompt('txt'))
  const ingresso = Number(prompt('txt'))
  const resultado = custo/ingresso 
  console.log(resultado)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  const msg1 = prompt('Escreva')
  const msg2 = prompt('escreva')
  const mensagem = msg1.length == msg2.length
  console.log(mensagem)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const msg = prompt('mensg')
  const msg2 = prompt('msg')
  const mensagem1 = msg.toLocaleLowerCase
  const mensagem2 = msg2.toLocaleLowerCase
  console.log((msg.length).toLocaleString == (msg2.length).toLocaleString)
}

// Exercício 10
function checaRenovacaoRG() {
  const anoAtual = Number(prompt('texto'))
  const anoNascimento = Number(prompt('texto'))
  const anoRg = Number(prompt('texto'))

  const renova20Anos = anoAtual - anoNascimento <= 20 && anoAtual- anoRg <= 5
  const renovacao50Anos = anoAtual - anoNascimento > 20 <= 50 && anoAtual - anoRg <=10
  const renovacao50AnosMais = anoAtual - anoNascimento > 50 && anoAtual - anoRg <= 15
  const renovacaoRg = renova20Anos || renovacao50Anos || renovacao50AnosMais
  console.log(renovacaoRg)
}

// Exercício 11
function checaAnoBissexto() {
  const ano = Number(prompt('escreva'))
  const bissexto = (ano % 4 == 0) == (ano % 100 == 0) == (ano % 400 == 0)
  console.log(bissexto)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  const age = prompt('texto')
  const educacao = prompt('texto')
  const horario = prompt('texto')
  const resultado = (typeof age) === (typeof educacao) === (typeof horario)
  console.log(resultado)
}