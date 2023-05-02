const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar()
const falar = pessoa.falar
 falar() //conflito para acessar o objeto saudacao de pessoa pois o this aponta para outro local

 const falarDePessoa = pessoa.falar.bind(pessoa) // bind passa o objeto que quer que seja resolvido o this.
 falarDePessoa()

 const falar2 = pessoa.falar
 falar2()
