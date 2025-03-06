let tarefas = [];

// Adicionar tarefa
function adicionarTarefa(descricao) {
    tarefas.push({ descricao, concluida: false });
}

// Listar tarefas
function listarTarefas() {
    tarefas.forEach((tarefa, index) => {
        console.log(`${index + 1}. ${tarefa.descricao} - ${tarefa.concluida ? "Concluída" : "Pendente"}`);
    });
}

// Marcar tarefa como concluída
function concluirTarefa(indice) {
    if (tarefas[indice]) {
        tarefas[indice].concluida = true;
    }
}

// Testando o CRUD
adicionarTarefa("Estudar JavaScript");
adicionarTarefa("Fazer exercícios");
listarTarefas();
concluirTarefa(0);
listarTarefas();
