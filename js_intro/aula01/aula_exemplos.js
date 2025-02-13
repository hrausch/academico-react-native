/**
 * Solicitando um nome do usuário e exibindo uma mensagem
 */
function nomeUsuario(){
    let nome = prompt("Digite seu nome:");
    console.log("Olá, " + nome + "!");
}

/**
 * Calculando a soma de dois números
 */
function calcularSoma(){
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));
    console.log("A soma é: " + (num1 + num2));
}

/**
Verificando se um número é par ou ímpar
 */
function verificarParImpar(){
    let numero = parseInt(prompt("Digite um número:"));
    console.log(numero % 2 === 0 ? "Par" : "Ímpar");
}

/**
 * Exibindo a data atual
 * Documentacao do objeto date
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */
function imprimirDataAtual(){
    let dataAtual = new Date();
    console.log(dataAtual);
    console.log("Data atual: " + dataAtual.toLocaleDateString());
}
/**
 * Calcula a idade de uma pessoa informada pelo prompt
 */
function calcularIdade(){
    let nome = prompt("Digite seu nome:");
    let anoNascimento = prompt("Digite seu ano de nascimento:");

    //Documentacao do objeto date
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    let idade = new Date().getFullYear() - anoNascimento;

    console.log("Olá, " + nome + "! Você tem " + idade + " anos.");
}

/**
 * Verificando se um número é positivo, negativo ou zero
 */
function verificarNumero(){
    let numero = parseFloat(prompt("Digite um número:"));
    if (numero > 0) {
        console.log("Positivo");
    } else if (numero < 0) {
        console.log("Negativo");
    } else {
        console.log("Zero");
    }

}