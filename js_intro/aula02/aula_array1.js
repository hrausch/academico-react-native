let frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas);


console.log(frutas[0]); // "Maçã"
console.log(frutas[2]); // "Laranja"

frutas.push("Manga"); // Adiciona no final
frutas.pop(); // Remove do final
frutas.unshift("Uva"); // Adiciona no início
frutas.shift(); // Remove do início

frutas.forEach(fruta => console.log(fruta));


for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}: ${frutas[i]}`);
}


for (let fruta of frutas) {
    console.log(fruta);
}

let frutasMaiusculas = frutas.map(fruta => fruta.toUpperCase());
console.log(frutasMaiusculas);


const numeros = [1, 2, 3, 4, 5];

numeros.forEach(num => console.log(num * 2)); // Multiplica cada número por 2

const dobrados = numeros.map(num => num * 2);
console.log(dobrados); // [2, 4, 6, 8, 10]

const pares = numeros.filter(num => num % 2 === 0);
console.log(pares); // [2, 4]


