function exibirMensagem(){
    if(true) { 
        var escopoFuncao = 'Caelum'; 
        let escopoBloco = 'Alura';

       console.log(escopoBloco); // Alura 
   } 

   console.log(escopoFuncao); // Caelum , como o var possui uma variavel Hoisting ela é movida até o topo do seu contexto de execução.
   console.log(escopoBloco); // Ocorrera um erro ao printar pois Let só pode ser utilizado no bloco de criação.
}

console.log(exibirMensagem())