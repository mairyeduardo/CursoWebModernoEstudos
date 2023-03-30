function exibirMensagem(){
    if(true) { 
        var escopoFuncao = 'Caelum'; 
        let escopoBloco = 'Alura';

       console.log(escopoBloco); // Alura 
   } 

   console.log(escopoFuncao); // Caelum 
   console.log(escopoBloco); // Ocorrera um erro ao printar pois Let só pode ser utilizado no bloco de criação.
}

console.log(exibirMensagem())
