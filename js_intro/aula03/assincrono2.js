async function exemploAsync() {
    return "Olá, mundo!";
}

exemploAsync().then(resultado => console.log(resultado)); 


async function obterDados() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Dados recebidos!"), 2000);
    });

    let resultado = await promise;
    console.log(resultado);
}

obterDados();


async function buscarUsuario() {
    try {
        let resposta = await fetch('https://api.exemplo.com/usuario/1');
        let dados = await resposta.json();
        console.log(dados);
    } catch (erro) {
        console.error('Erro ao buscar usuário:', erro);
    }
}


async function buscarDados() {
    let [usuarios, produtos] = await Promise.all([
        fetch('https://api.exemplo.com/usuarios').then(res => res.json()),
        fetch('https://api.exemplo.com/produtos').then(res => res.json())
    ]);

    console.log('Usuários:', usuarios);
    console.log('Produtos:', produtos);
}



/**
 * 
 *  let minhaPromise = new Promise((resolve, reject) => {
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
 */
async function minhaPromiseAsync() {
    let sucesso = true; // Altere para false para testar a rejeição
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (sucesso) {
                resolve("Sucesso! Dados carregados.");
            } else {
                reject("Erro: Falha ao carregar os dados.");
            }
        }, 2000);
    });
}

async function executarMinhaPromise() {
    try {
        let resultado = await minhaPromiseAsync();
        console.log("EX1 - Promise resolvida:", resultado);
    } catch (erro) {
        console.error("EX1 - Promise rejeitada:", erro);
    }
}

executarMinhaPromise();


async function executarMinhaPromiseEx2() {
    try {
        let resultado = await minhaPromiseAsync();
        console.log("EX2 - Passo 1:", resultado);
        let novoResultado = "EX2 - Passo 2: Processando mais dados...";
        console.log(novoResultado);
    } catch (erro) {
        console.error("EX2 - Erro capturado:", erro);
    }
}

executarMinhaPromiseEx2();


async function executarMinhaPromiseEx3() {
    try {
        let resultado = await minhaPromiseAsync();
        console.log("EX3 - Passo 1:", resultado);
        let novoResultado = "EX3 - Passo 2: Processando mais dados...";
        console.log(novoResultado);
    } catch (erro) {
        console.error("EX3 - Erro capturado:", erro);
    } finally {
        console.log("EX3 - Passo 3: Finalizando o processamento. Mesmo com erro anterior.");
    }
}

executarMinhaPromiseEx3();







   
      

