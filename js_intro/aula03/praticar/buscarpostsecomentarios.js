async function buscarPosts() {
    let resposta = await fetch("https://jsonplaceholder.typicode.com/posts");
    return resposta.json();
}

async function buscarComentarios() {
    let resposta = await fetch("https://jsonplaceholder.typicode.com/comments");
    return resposta.json();
}

async function carregarDados() {
    try {
        let [posts, comentarios] = await Promise.all([buscarPosts(), buscarComentarios()]);
        console.log("Total de Posts:", posts.length);
        console.log("Total de Comentários:", comentarios.length);
    } catch (erro) {
        console.error("Erro ao buscar os dados:", erro);
    }
}

carregarDados();
