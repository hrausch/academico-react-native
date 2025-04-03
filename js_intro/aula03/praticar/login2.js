async function login(usuario, senha) {
    if (usuario === "admin" && senha === "1234") {
        return "Login bem-sucedido! Bem-vindo, admin.";
    } else {
        throw new Error("Usuário ou senha incorretos!");
    }
}

async function autenticar() {
    try {
        let resposta = await login("admin", "1234");
        console.log(resposta);
    } catch (erro) {
        console.error(erro.message);
    }
}

autenticar();
