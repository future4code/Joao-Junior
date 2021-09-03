```function calculaNota(ex, p1, p2) {
    // Escreva seu código aqui
    let notaExercicio = ex
    let primeiraProva = p1
    let segundaProva = p2
    if ((notaExercicio + primeiraProva + segundaProva)/3 >= 9){
      return "A" 
    } else if ((notaExercicio + primeiraProva + segundaProva)/3 <9 && (notaExercicio + primeiraProva + segundaProva)/3 >= 7.5 ){
        return "B"} 
     else if ((notaExercicio + primeiraProva + segundaProva)/3 < 7.5 && (notaExercicio + primeiraProva + segundaProva)/3 >= 6){
        return "C"
    } else if ((notaExercicio + primeiraProva + segundaProva)/3 < 6 ){
        return "D"}      
  else {
            return "nothing"
        }
  }
```