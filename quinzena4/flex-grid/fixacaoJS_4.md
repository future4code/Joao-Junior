```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    // Escreva seu código aqui
  let vetor = arrayDeNumeros
  let escolhido = numeroEscolhido
  let contagem = 0 
  if (vetor.forEach((v)=> (v === escolhido &&
  contagem++))){
  return `O número ${escolhido} aparece ${contagem}x`
  } else if ( vetor.indexOf(numeroEscolhido) === -1){ return 'Número não encontrado'}
  }
  
    
  

  console.log(contaOcorrencias([0,1,1,2,3]), 1)```