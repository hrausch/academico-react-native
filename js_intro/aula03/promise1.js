let minhaPromise = new Promise((resolve, reject) => {
    let sucesso = true; // Altere para false para testar a rejeição
    setTimeout(() => {
        if (sucesso) {
            resolve("Sucesso! Dados carregados.");
        } else {
            reject("Erro: Falha ao carregar os dados.");
        }
    }, 2000);
});

console.log(minhaPromise);

minhaPromise
    .then(resultado => {
        console.log("EX1 - Promise resolvida:", resultado);
    })
    .catch(erro => {
        console.error("EX1 - Promise rejeitada:", erro);
    });


minhaPromise
    .then(resultado => {
        console.log("EX2 - Passo 1:", resultado);
        return "EX2 - Passo 2: Processando mais dados...";
    })
    .then(novoResultado => {
        console.log(novoResultado);
    })
    .catch(erro => {
        console.error("EX2 - Erro capturado:", erro);
    });


 minhaPromise
    .then(resultado => {
        console.log("EX3 - Passo 1:", resultado);
        return "EX3 - Passo 2: Processando mais dados...";
    })
    .then(novoResultado => {
        console.log(novoResultado);
    })
    .catch(erro => {
        console.error("EX3 - Erro capturado:", erro);
    })
    .then(() => {
        console.log("EX3 - Passo 3: Finalizando o processamento. Mesmo com erro anterior.");
    });









   
      

