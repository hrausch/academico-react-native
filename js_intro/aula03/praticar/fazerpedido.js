function fazerPedido() {
    return new Promise((resolve, reject) => {
        let tempoPreparo = Math.floor(Math.random() * 4000) + 1000; // 1 a 5 segundos

        setTimeout(() => {
            if (tempoPreparo < 4000) {
                resolve(`Pedido pronto em ${tempoPreparo / 1000} segundos!`);
            } else {
                reject("O pedido demorou muito e foi cancelado!");
            }
        }, tempoPreparo);
    });
}

fazerPedido()
    .then(mensagem => {
        console.log(mensagem);
    })
    .catch(erro => {
        console.error(erro);
    });