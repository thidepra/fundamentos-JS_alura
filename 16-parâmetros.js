//Parâmetros de função

//             2    2
function soma(num1, num2) {
    let resultado = num1 + num2;
    return resultado;    
}
console.log(soma(2, 2))
console.log(soma(245, 25))

/* parâmetro x argumentos
cuidar a ordem dos parâmetros
*/

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`
}
console.log(nomeIdade(40,"Thiane")) //o JS não tem como saber que os parâmetros estão invertidos


function multiplica(num1 = 1, num2 = 1) {
    return num1 * num2;
}
//                          9          6
console.log(multiplica(soma(4, 5),soma(3, 3)));
//                          9    undefined   
console.log(multiplica(soma(4, 5),)); /* imprime NaN - para resolver isso, temos que passar o argumento com um valor padrão:
numero1 = 1 em vez de somente numero1. */

