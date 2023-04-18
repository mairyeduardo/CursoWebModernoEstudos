const name = "Name1"
const concatenacao = 'Hello ' + name + '!'

const template = `Hello ${name} !`


//expressoes sem template:
console.log("1 + 1 = " + (1 + 1) + " RESULT");
console.log(1 + 1);

// expressoes com template: 
console.log(`1 + 1 = ${1 + 1} RESULT`);

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado, perigo')} !!`);
