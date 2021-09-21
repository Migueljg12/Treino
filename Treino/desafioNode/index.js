const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//desafio a mulher chinesa menor salario
axios.get(url).then(response => {
    const funcionarios = response.data
    let newArray = []
    newArray = funcionarios.filter(x => x.genero == 'F').filter(x => x.pais == 'China')
    newArray = newArray.reduce((num1, num2) => num1.salario < num2.salario ? num1 : num2)
    console.log(newArray)
})