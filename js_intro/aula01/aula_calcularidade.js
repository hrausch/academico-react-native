let nome = prompt("Digite seu nome:");
let anoNascimento = prompt("Digite seu ano de nascimento:");

let idade = new Date().getFullYear() - anoNascimento;

console.log("Olá, " + nome + "! Você tem " + idade + " anos.");