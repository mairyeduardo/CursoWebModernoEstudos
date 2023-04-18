
///////////////operador unario:

let num1 = 1
let num2 = 2

num++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--)
console.log(num1 === num2)

//////////////operador de exponenciação:

let exp = 2**3 // o primeiro valor representa a base e o segundo o expoente

console.log(exp) // 2³ = 8


// outra possibilidade

let base = 2
base **= 3 // Eleva o valor armazenado na base à terceira potencia.

console.log(base) // 2³ = 8