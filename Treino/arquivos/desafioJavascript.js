const cumprimentar = nome => console.log(`Olá, ${nome}!`)
cumprimentar('Giuliana')

const idadeEmDias = idade => console.log(`${idade} convertido em dias é ${idade * 365}`)
idadeEmDias(28)

const calcularSalario = (tempo, salario) => console.log(`Seu salário é R$${tempo * salario}`)
calcularSalario(176, 20)

const calendarioMensal = mes => {
    switch (mes) {
        case 1: console.log(`${mes} é janeiro`); break
        case 2: console.log(`${mes} é fevereiro`); break
        case 3: console.log(`${mes} é março`); break
        case 4: console.log(`${mes} é abril`); break
        case 5: console.log(`${mes} é maio`); break
        case 6: console.log(`${mes} é junho`); break
        case 7: console.log(`${mes} é julho`); break
        case 8: console.log(`${mes} é agosto`); break
        case 9: console.log(`${mes} é setembro`); break
        case 10: console.log(`${mes} é outubro`); break
        case 11: console.log(`${mes} é novembro`); break
        case 12: console.log(`${mes} é dezembro`); break
    }
}
calendarioMensal(8)

const maiorOuIgual = (num1, num2) => console.log(num1 >= num2)
maiorOuIgual(2, 3)

const inverso = valor => {
    const tipo = typeof (valor)
    if (tipo == "number") {
        return console.log(-valor)
    } else if (tipo == "boolean") {
        return console.log(!valor)
    } else {
        return console.log('Parametro é uma string, esperamos apenas booleno ou número!')
    }
}
inverso(535)

const estaEntre = (numero, minimo, maximo, inclusivo = false) => {
    if (inclusivo == true) {
        if (numero >= minimo && numero <= maximo) {
            return console.log('Está entre!')
        } else { return console.log('Não está entre') }
    } else if (numero > minimo && numero < maximo) {
        return console.log('Está entre!')
    } else {
        return console.log('Não está entre')
    }
}

estaEntre(2, 2, 10, true)

const multiplicar = (num1, num2) => {
    let resultado = 0
    for (let i = 0; i < num2; i++)
        resultado += num1
    return console.log(resultado)

}

multiplicar(10, 5)

const repetir = (item, numRep) => {
    let array = []
    for (let i = 0; i < numRep; i++)
        array.push(item)
    return console.log(array)
}

repetir('Deu certo', 4)

const simboloMais = num => {
    let resultado = ''
    for (let i = 0; i < num; i++)
        resultado += '+'
    console.log(resultado)
}

simboloMais(2)

const primeiroEUltimoElemento = array => {
    let ultimo = array.length - 1
    let newArray = []
    newArray.push(array[0], array[ultimo])
    return console.log(newArray)
}

primeiroEUltimoElemento(['Primeiro', 'não tem que aparecer', 'nem esse', 'ultimo'])

const removerPropriedade = (obj, remover) => {
    let newObj = Object.assign({}, obj)
    delete newObj[remover]
    console.log(newObj)
}

removerPropriedade({
    nome: 'Miguel',
    idade: '25',
    pele: 'branca'
}, "pele")

const filtraNumeros = array => {
    let newArray = []
    newArray = array.filter(x => typeof (x) == 'number')
    console.log(newArray)

}

filtraNumeros(['oi', 1, 'não', 2, 5])

const objetoParaArray = obj => {
    return console.log(Object.entries(obj))
}

objetoParaArray({
    nome: 'Miguel',
    dev: 'node',
    skill: 'javascript'
})

const somenteOsPares = array => {
    let newArray = []
    newArray = array.filter(x => (x % 2) == 0)
    console.log(newArray)
}

somenteOsPares([2, 3, 4, 5, 6, 7, 8, 890, 10, 3214])

const checarAnoBissexto = ano => {
    const divisivelPorQuatro = ano % 4 == 0
    const divisivelPorCem = ano % 100 == 0
    const divisivelPorQuatrocentos = ano % 400 == 0
    return console.log((divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos)

}

checarAnoBissexto(2020)

const somarNum = array => {
    console.log(array.reduce((num1, num2) => num1 + num2))
}

somarNum([2, 3, 5, 3, 5, 6, 3])

const somaDespesa = array => {
    let resultado = 0
    for (let index of array)
        resultado += index.preco
    console.log(resultado)

}

somaDespesa([
    { nome: "Jornal online", categoria: "Informação", preco: 3500.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 8971.12 }
])

const calcularMedia = array => {
    let total = array.reduce((num1, num2) => num1 + num2)
    total /= array.length
    console.log(total.toFixed(2))
}

calcularMedia([19, 25, 75])

const areaTriangulo = (base, altura) => {
    let area = (base * altura) / 2
    console.log(area.toFixed(2))
}

areaTriangulo(10, 15)

const menorNum = array => {
    let menor = array.reduce((num1, num2) => { if (num1 < num2) { return num1 = num1 } else { return num1 = num2 } })
    console.log(menor)
}

menorNum([23, 45, 34, 1, 3, -434, 34, 5])

const loteria = num => {
    let numSorte = Math.floor(Math.random() * (10 - 1 + 1) + 1)
    let sorteado = numSorte == num
    sorteado ? console.log(`Parabens! O número sorteado foi o ${numSorte}.`) : console.log(`Que pena, o número sorteado foi ${numSorte}.`)
}

loteria(3)

const contarPalavras = frase => {
    let array = frase.split(' ')
    console.log(array.length)
}

contarPalavras('koe manito tudo ok')

const contarCaractere = (caracter, frase) => {
    let quantidade = 0
    let arrumada = frase.toLowerCase()
    for (let i = 0; i < arrumada.length; i++)
        if (arrumada.charAt(i) == caracter) quantidade++

    return console.log(quantidade)

}

contarCaractere("o", "Olá a todos os envolvidos")

const buscador = (busca, array) => {
    let newArray = array.filter(x => x.toLowerCase().includes(busca))
    console.log(newArray)
}

buscador("le", ['Letisgou', 'valorant', 'programador'])

const removerVogais = palavra => {
    console.log(palavra.replace(/[aeiou]/ig, ''))
}

removerVogais('EicomuebsaWsaQIuasdO')

const inverter = obj => {
    let objVazio = {}
    let array = Object.entries(obj)
    array.forEach(x => {
        const chave = 0, valor = 1

        objVazio[x[valor]] = x[chave]
    })
    return console.log(objVazio)
}

inverter({ a: 1, b: 2, c: 3 })

const filtraQuantidadeDeDigito = (array, digito) => {
    let newArray = []
    array.forEach(numeros => {
        let filtro = numeros.toString().length == digito
        if (filtro) newArray.push(numeros)
    })
    console.log(newArray)
}

filtraQuantidadeDeDigito([38, 2, 365, 10, 125, 11], 2)

const segundoMaior = array => {
    let metodo = (num1, num2) => num1 < num2 ? num1 = num2 : num2 = num1
    let maior = array.reduce(metodo)
    let arrayFinal = array.filter(x => x - maior).reduce(metodo)

    console.log(arrayFinal)
}

segundoMaior([12, 16, 17, 5])


const recerberMelhorEstudante = array => {
    let arrayModi = Object.entries(array)
    let nota = 0
    let aluno = {}
    let newArray = []
    arrayModi.forEach((pessoa, index) => {
        let soma = pessoa[1].reduce((num1, num2) => num1 + num2)
        media = soma / pessoa[1].length
        nota = media, aluno = pessoa
        newArray.push({
            nome: aluno[0],
            media: nota
        })
    })
    newArray = newArray.reduce((num1, num2) => num1.media < num2.media ? num1 = num2 : num2 = num1)
    console.log(newArray)
}

recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9], // média 7.75
    Miguel: [8, 8, 9, 9] // média

})