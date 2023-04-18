const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores[4])
console.log(valores)
console.log(valores.length)


// é possivel criar arrays com diferentes tipos de elementos.
valores.push({id: 3}, false, true, 'teste') 
console.log(valores)

console.log(valores.pop())
delete valores[5]
console.log(valores)

console.log(typeof valores)
