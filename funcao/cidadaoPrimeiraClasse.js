//criar de forma literal
function fun1() { }

//armazenar em uma variável
const fun2 = function(){ }

//armazenar em um array
const array = [function(a,b) {return a + b}, fun1, fun2]

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

//passar função como parametro
function run(fun){
	fun()
}
run(function(){console.log('Executando...')})

// funcao pode retornar/conter uma funçâo
function soma(a,b) {
	return function (c){
		console.log(a + b + c)
	}
}	
soma(2,3)(4)
//ou
const somaPriFuncao = soma(2,3)
somaPriFuncao(4)