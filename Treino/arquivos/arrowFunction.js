
function criarProduto(Nome, Idade) {
    return {
        name: Nome,
        sobrenome: Idade
    }
}

// const teste = new criarProduto(miguel, 25)

console.log(criarProduto("Miguel", 25))