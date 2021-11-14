//Template Strings

const nome = "Thiane";
const idade = 2021 - 1987;
const cidadeDeNascimento = "Santa Maria";

// const apresentacao = "Meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento;
const apresentacao = `Meu nome é ${nome}, tenho ${idade} anos e nasci na cidade de ${cidadeDeNascimento} no RS.`;

console.log(apresentacao);