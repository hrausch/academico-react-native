// Constante
const PI = 3.14159;

// Let (pode ser reatribuída)
let nome = "Alice";
nome = "Bob";

// Var (escopo mais amplo, evite em JavaScript moderno)
var idade = 30;

/***
 * TODO: Diferença de let e var.
 * 
 */

/**
 * escopo de bloco vs escopo de função
 */

function exemploEscopo() {
  if (true) {
      let x = 10; // `let` tem escopo de bloco
      var y = 20; // `var` tem escopo de função
  }
  console.log(y); // Funciona, pois `var` tem escopo de função
  console.log(x); // Erro! `x` não é acessível fora do bloco
}
exemploEscopo();

/**
 * Redeclaração de Variáveis
 */
var nome_var = "Ana";
var nome_var = "Carlos"; // Permitido com `var`
console.log(nome); // Saída: "Carlos"

let idade = 25;
let idade = 30; // Erro! `let` não permite redeclaração no mesmo escopo

// Strings
let mensagem = "Hello, world!";

// Números
// let idade = 30; //ocorrerá um erro pq idade foi declarada
let altura = 1.75;

// Booleanos
let estaChovendo = true;

// Arrays
let frutas = ["maçã", "banana", "laranja"];

// Objetos
let pessoa = {
  nome: "Ana",
  idade: 25,
  cidade: "São Paulo"
};