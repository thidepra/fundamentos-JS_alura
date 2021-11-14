// Tipo Null
let input = null;
console.log("Tipo Null");

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

//Tipo Undefined
let input = null;
let input2;
console.log("\n Tipo Undefined");

console.log(input); // null
console.log(input2); // undefined

//Comparação
console.log("\n Null x Undefined");
console.log(null == undefined); // true
console.log(null === undefined); // false