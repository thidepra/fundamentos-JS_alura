// == (comparação implícita)

const numero = 5;
const texto = "5";

console.log(numero == texto); //true
console.log(numero === texto);//false

//typeof - informa o tipo de dado salvo na variável
console.log(typeof numero);
console.log(typeof texto);

/*  == compara o valor
    === compara o valor e o tipo de dado */

/*  atualmente dar preferencia para usar o ===
 e fazer a conversão explicita usando?
 Number() e string() */
