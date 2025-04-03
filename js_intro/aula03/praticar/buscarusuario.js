async function buscarUsuario(id) {
    try {
        let resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!resposta.ok) throw new Error("Usuário não encontrado!");

        let usuario = await resposta.json();
        console.log("Usuário encontrado:", usuario);
    } catch (erro) {
        console.error("Erro ao buscar usuário:", erro.message);
    }
}

// Teste com um ID entre 1 e 10
buscarUsuario(3);