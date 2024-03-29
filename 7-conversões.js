// tipo de dado e booleanos
console.log("Tipo de dados e boleanos");

//conversão implícita
console.log("\n Conversão Implícita");
const numero = 456;
const numeroString = "456";

console.log(numero == numeroString);
// === compara o tipo e o valor da variavel
// == converte o valor da variável e compara (transformou em string)

console.log(numero + numeroString);

//conversão explicita
console.log("\n Conversão Explícita");

/*Number()
String() */
console.log("\n Conversão Explícita - Number()");
console.log (numero + Number(numeroString));

const numeroStringCon = Number("456a");
console.log(numeroStringCon);

console.log("\n Conversão Explícita - String()");
let telefone = 12341234;
console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

// o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.
console.log("\n Conversão Explícita - .toString");
console.log("O telefone é " + telefone.toString()); 

console.log("\n Conversão para String");
let usuarioConectado= false;
console.log(String( usuarioConectado ) ); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.

usuarioConectado= true;
console.log(String( usuarioConectado ) ); // agora teremos uma string “true”.

// Vamos calcular a área de um retângulo
console.log("\n Conversão para Number - cálculo área do retângulo");
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da da multiplicação

console.log("\n Conversão para Number - NaN");
let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaN

console.log("\n Conversão para Number de Boolean");
usuarioConectado= false;
console.log(Number( usuarioConectado ) ); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado= true;
console.log(Number( usuarioConectado ) ); // agora teremos a conversão de true (verdadeiro) para o número 1.