function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let contador = 0
  for(let i = 0; i < arrayDeNumeros.length; i++){
    if(arrayDeNumeros[i] === numeroEscolhido){
      contador++
    }
    
  }
  if (contador === 0){
     return "Número não encontrado"
  }
   return `O número ${numeroEscolhido} aparece ${contador}x`
}
  
    
  

  console.log(contaOcorrencias([0,1,1,2,3]), 1)