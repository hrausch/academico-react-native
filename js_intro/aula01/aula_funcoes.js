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
  
  // Arrow function
  const multiplica = (x, y) => x * y;
  console.log(multiplica(4, 5));