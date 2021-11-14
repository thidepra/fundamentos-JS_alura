// function minhaFunção(param){
//     //bloco de código
// }

// minhaFunção("param")

// //Expressão de Função
// const soma = function(num1, num2) {return num1 + num2} //função anônima
// console.log(soma(1, 1));

/*Diferença principal: HOISTING
funções e var são "listadas" no topo
*/
console.log(apresentar());

function apresentar() {
    return "Olá";
}
console.log(soma(1, 1));//deve estar depois da function
const soma = function(num1, num2) {return num1 + num2}