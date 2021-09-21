function calculo(num1, num2) {

    this.calcular = function () {
        console.log(`Soma dos valores: ${num1 + num2}`)
        console.log(`Subtração dos valores: ${num1 - num2}`)
        console.log(`Divisão dos valores: ${num1 / num2}`)
        console.log(`Multiplicação dos valores: ${num1 * num2}`)
    }

}

const p1 = new calculo(12, 8)
// p1.calcular()


let triangulo = (lado1, lado2, lado3) => {

    if (lado1 == lado2 && lado2 == lado3) { return console.log('Esse é um triangulo Equilátero') }
    else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) { return console.log('Esse é um triangulo Isósceles') }
    else { return console.log('Esse é um triangulo Escaleno') }
}

triangulo(1, 12, 31)


