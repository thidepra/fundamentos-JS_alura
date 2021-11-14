// tipo String
console.log("Tipo string");
const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const senhaSuper = "senhaSuperSegura24";
const stringDeNumeros = "35467";

const citacao = 'O Caio disse "Oi!"';
console.log (citacao);


// concatenação (+)
console.log("\n Concatenação");
const frase = "Meu nome é ";
const meuNome = "Thiane";
console.log(frase + meuNome);


//unicode transformation format - UTF
console.log("\n Unicode Transformation Format - UTF");
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log("Caracteres especiais")
console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)


//trabalhando com Strings
console.log("\n Trabalhando com Strings");
const cidade = "belo horizonte";
const input = "Belo Horizonte";
console.log("\n Método toLowerCase")
console.log(cidade === input); // false

const inputMinusculo = input.toLowerCase();
console.log(cidade === inputMinusculo); // true

const senha = "minhaSenha123";
console.log("\n Método length")
console.log(senha.length) // 13 caracteres


//template string ou template literal