function apresentar(nome) {
    return `Meu nome é ${nome}`;
}

//Arrow function
const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

//Arrow function com mais de 1 linha de instrução
const somaNumerosPequenos = (num1, num2) => {
    if (num1 && num2 > 10) {
        return "Somente números de 1 a 9";
    } else {
        return num1 + num2;
    }
}
//Hosting - arrow function se comporta como expressão

console.log(apresentarArrow("Thiane"));
console.log(soma(4, 8));
console.log(somaNumerosPequenos(2, 6));