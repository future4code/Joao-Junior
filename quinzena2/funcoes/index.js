/* function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10)) */

/* let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
 a função retorna se o usuario digitou cenoura ou nao */

 /* function perfil(nome, idade, local, estudante){
     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${local} e sou ${estudante}.`)
 }

 console.log(perfil("Joao", 30, "Salvador", "estudante")) */

 //a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

/*  function soma(n1,n2){
     console.log(n1+n2)
 }

 console.log(soma(5,10)) */

 //b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.

/*  function operacao(n1,n2){     
     console.log(n1>=n2?true:false)
 }

 console.log(operacao(7,3)) */

 //c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não.

/*  function resultado(n1,n2){
     console.log(n1%n2==0? "par":"impar")
 }

 console.log(resultado(3,2)) */

 //d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
/* 
 function msg(mensagem){
     console.log(mensagem.toLowerCase(), mensagem.length)
 }

 console.log(msg("casualidade"))
 */
 /* 3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

    ```
    Números inseridos: 30 e 3
    Soma: 33
    Diferença: 27
    Multiplicação: 90
    Divisão: 10
     */
    
    function adiçao(n1, n2){
        return n1+n2
    }
    console.log('adição: '+ adiçao(10,5))

    function subtracao(sub1,sub2){
        return sub1-sub2
    }
    console.log('Diferença: ',subtracao(10,5))

    function multiplicacao(prod1, prod2){
        return prod1*prod2
    }
    console.log('multiplicação:', multiplicacao(10,5))

    function divisao(dd1,dd2){
        return dd1/dd2
    }
    console.log(`Divisão:` , divisao(10,5))