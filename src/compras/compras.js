function calcularTotal(ferramentas, comprar) {
    if (ferramentas.length == 0 || comprar.length == 0) {
        throw new Error("Ambas as listas precisam ter ao menos um item.");
    }

    let valorTotal = 0;
    let ferramentasCompradas = [];

    for (let i = 0; i < ferramentas.length; i++) {
        const lista = ferramentas[i];
        for (let j = 0; j < comprar.length; j++) {
            if (lista.nome === comprar[j]) {
                valorTotal += lista.preco;
                if (ferramentasCompradas.length > 0) {
                    ferramentasCompradas += ', ';
                }
                ferramentasCompradas += lista.nome;
                break;
            }
        }
    }

    if (ferramentasCompradas.length === 0) {
        throw new Error("Nenhuma ferramenta desejada encontrada.");
    }
    
return `O valor a pagar pelas ferramentas (${ferramentasCompradas}) é R$ ${valorTotal.toFixed(2)}`;
}

module.exports = {
    calcularTotal
};
