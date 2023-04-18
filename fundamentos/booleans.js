let isTrue = false
console.log(isTrue);

isTrue = true
console.log(isTrue);   

isTrue = 1
console.log(!!isTrue)
console.log(!isTrue)

//os verdadeiros...
console.log('OS VERDADEIROS:')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'string')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isTrue = true))

//os falsos...
console.log('OS FALSOS:');
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isTrue = false))

console.log('EXEMPLOS:');
console.log(!!('' || null || 0 ||' ')) //possui um true!


let nome = ''
console.log(nome || "Desconhecido");

nome = 'NAME'
console.log(nome || "Desconhecido")
