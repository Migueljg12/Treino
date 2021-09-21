Array.prototype.map2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preço": 3.45 }',
    '{"nome": "Caderno", "preço": 13.90 }',
    '{"nome": "Kit de Lapis", "preço": 41.22 }',
    '{"nome": "Caneta", "preço": 7.50 }'
]

const paraObj = json => JSON.parse(json)
const apenasPreço = produto => produto.preço

const resultado = carrinho.map(paraObj).map(apenasPreço)
console.log(resultado)

const teste = carrinho.map2(array => {
    let obj = JSON.parse(array)
    return obj.preço
})

console.log(teste)