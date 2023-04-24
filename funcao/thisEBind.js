const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar()
const falar = pessoa.falar
 falar() //conflito para acessar o objeto saudacao de pessoa

 const falarDePessoa = pessoa.falar.bind(pessoa)
 falarDePessoa()
