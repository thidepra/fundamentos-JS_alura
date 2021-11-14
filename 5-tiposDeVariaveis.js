//VAR
console.log("Tipo de Variáveis");
console.log("\n VAR");
var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);
var area;


//LET
console.log("\n LET");
let forma = "retângulo";
let altura = 5;
let comprimento = 7;
let area; //precisa ser declarada antes de ser usada

if (forma === "retângulo") {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2; //area triângulo
}
console.log(area);


//CONST
console.log("\n CONST");
const forma = "quadrado";
const altura = 5;
const comprimento = 7;
// const area; erro pois como é uma constante precisa ser inicializada e não mudar de valor ao longo do código. Nesse caso o ideal é usar a let
let area;

if (forma === "quadrado") {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);