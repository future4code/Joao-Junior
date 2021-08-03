// 1. Exercícios de interpretação de código
/*
a)
console.log(filme.elenco[0]) imprime Matheus Nachtergaele.
console.log(filme.elenco[filme.elenco.length - 1)]) imprime "Matheus Nachtergaele", "Selton Mello", "Denise Fraga".
console.log(filme.transmissoesHoje[2]) imprime Canal: "Globo", horario: "14h"

  2.
a) console.log(cachorro) imprime nome: "Juca", idade: 3, raca: "SRD"
   console.log(gato) imprime nome: "Juba", idade:3, raca: "SRD"
   console.log(tartaruga) imprime nome: "Jubo", idade:3, raca: "SRD"
b) Realiza cópia de um objeto para o outro podendo também modificar e/ou adicionar algumas chaves

  3.
a)false 
  undefined.
b) Acreito que tenha aparecido o false porque na constante pessoa, a chave backender está definida com o booleano false. Ja no segundo console deu undefined porque não houve definição para a proprieda "altura".





*/
//   Exercícios de escrita de código
// 1.
//a)
const humano = {
    nome: "João",
    apelidos: ["Nininho", "John", "Juan"]
}
//b)
const novoHumano = {
    ...humano,
    apelidos: ["Nino","Juninho","Canhotinha"]
}

console.log(novoHumano.apelidos)

// 2.
// a)

    const pessoa1 = {
        nome: "carlos",
        idade: '35 anos',
        profissao: 'eletricista'
    }
    const pessoa2 = {
        nome: "Thalia",
        idade: "24",
        profissao: "Designer"
    }     */
// b)
     const pessoa1 = {
        nome: "carlos",
        idade: '35 anos',
        profissao: 'eletricista'
    }
    const pessoa2 = {
        nome: "Thalia",
        idade: "24",
        profissao: "Designer"
    }     

    const imprimearray = (objeto1, objeto2) => [
        objeto1.nome,
        objeto1.nome.length,
        objeto1.idade,
        objeto1.profissao,
        objeto1.profissao.length,
        objeto2.nome,
        objeto2.nome.length,
        objeto2.idade,
        objeto2.profissao,
        objeto2.profissao.length,
    ]

     console.log(imprimearray(pessoa1,pessoa2)) 

// 3. a), b)
    let carrinho = []
    let fruta1 = {
        nome: 'manga',
        disponibilidade: true        
    }
    let fruta2 = {
        nome: 'pera',
        disponibilidade: true
    }
    let fruta3 = {
        nome: 'banana',
        disponibilidade: true
    }
    const feira = (fruta1, fruta2, fruta3) => [
        carrinho[0] = fruta1,
        carrinho[1] = fruta2,
        carrinho[2] = fruta3

    ]
    console.log(feira(fruta1, fruta2, fruta3))