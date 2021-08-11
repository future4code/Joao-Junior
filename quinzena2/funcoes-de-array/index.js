/*          Exercícios de interpretação de código

1.
a) vai ser impresso o item (nome), a posição (index) e o array consecutivamente.

2.
a) vão ser impresso no console os valores dentro de nome: "Amanda Rangel", "Laís Petra" e "Letícia Chijo"

3.
a) vai ser impresso [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" }]


            Exercício de escruta de código

    1.
*/

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 //a)

 const nomeDoguinhos = pets.map((item, index, array) => {
     return item.nome
 })

 console.log(nomeDoguinhos)

//b)

const salsichas = pets.filter((item, index, array) => {
    return item.raca == "Salsicha"
})

console.log(salsichas)

//c)

const clientPoodle = pets.map((item, index, array) =>{
    if(item.raca == "Poodle") {
        return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
    } else {
        return "Lamento, você não tem disconto."
    }
})

console.log(clientPoodle)

//2.
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a)

 const nomeProduto = produtos.map((item, index , array) => {
     return item.nome
 })

 console.log(nomeProduto)

 //b)
  const nomeEpreco = produtos.map((item, index, array) =>{
      
    let precificado = item.preco * 0.05
    return `produto: ${item.nome} custa ${precificado} Reais`
  })

  console.log(nomeEpreco)

  //c)

  const bebidas = produtos.filter((item, index, array) => {
      return item.categoria == "Bebidas"
  })

  console.log(bebidas)

  //d)
  const contemYpe = produtos.filter((item, index, array) => {
      const checagem = item.nome
      if (checagem.includes("Ypê")){
          return checagem
      }
  })

  console.log(contemYpe)

  //e)
  const contemYpe = produtos.map((item, index, array) => {
    const checagem = item.nome
    const precificacao = item.preco
    if (checagem.includes("Ypê")){
        return `Compre ${checagem} por R$${precificacao}.`
    } else {return ''}
})

console.log(contemYpe)