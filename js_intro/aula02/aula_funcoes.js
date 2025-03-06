// Função normal
function saudacao(nome) {
    console.log("Olá, " + nome + "!");
  }
  saudacao("Carlos");
  
  // Função anônima
  let soma = function(a, b) {
    return a + b;
  };
  console.log(soma(2, 3));

const subtrair = (a, b) => a - b;
console.log(subtrair(10, 4)); 

const quadrado = num => num * num;
console.log(quadrado(5)); 
  
  // Arrow function
  const multiplica = (x, y) => x * y;
  console.log(multiplica(4, 5));


  const saudacao = nome => `Olá, ${nome}!`;
  console.log(saudacao("Maria"));