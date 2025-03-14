function login(usuario, senha) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usuario === "admin" && senha === "1234") {
                resolve("Login bem-sucedido! Bem-vindo, admin.");
            } else {
                reject("Usuário ou senha incorretos!");
            }
        }, 2000);
    });
}

async function autenticar() {
    try {
        let resposta = await login("admin", "1234"); // Troque os valores para testar
        console.log(resposta);
    } catch (erro) {
        console.error(erro);
    }
}

autenticar();



function login2(usuario, senha) {
    return new Promise((resolve, reject) => {
        if (usuario === "admin" && senha === "1234") {
            resolve("Login bem-sucedido! Bem-vindo, admin.");
        } else {
            reject("Usuário ou senha incorretos!");
        }
    });
}

// Testando o login
login2("admin", "1234")
    .then(console.log)
    .catch(console.error);
