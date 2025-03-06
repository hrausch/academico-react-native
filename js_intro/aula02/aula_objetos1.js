let pessoa = {
    nome: "Carlos",
    idade: 30,
    profissao: "Desenvolvedor"
};

console.log(pessoa);

console.log(pessoa.nome); // "Carlos"
console.log(pessoa["idade"]); // 30

pessoa.email = "carlos@email.com"; // Adiciona uma nova chave
delete pessoa.profissao; // Remove uma chave
console.log(pessoa);

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}

const aluno = { nome: "Maria", idade: 18, curso: "Computação" };

// Adicionar uma nova propriedade
aluno.matricula = 12345;

// Modificar uma propriedade
aluno.idade = 19;

// Remover uma propriedade
delete aluno.curso;

console.log(aluno);

const aluno2 = { nome: "Carlos", idade: 20, curso: "Engenharia" };
const { nome, idade } = aluno2;

console.log(nome, idade); // Carlos 20
