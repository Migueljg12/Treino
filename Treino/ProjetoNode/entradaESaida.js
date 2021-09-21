const os = require('os')
const { nextTick } = require('process')
console.log('Inicializando')

// em construção

const anonimo = process.argv.indexOf('oi') !== -1

if (anonimo) {
    process.stdout.write('Olá, qual o seu nome?\n')
    process.stdin.on('data', data => {
        const nome = data.toString().toLowerCase().replace(os.EOL, '')

        process.stdout.write(`Prazer em te conhecer ${nome}!`)
        process.exit()
    })
}

const stdin = process.openStdin()
stdin.setEncoding('utf8')
process.stdout.write('Olá, qual o seu nome?\n')
stdin.on('data', data => {


    let teste = data != '\r\n'
    if (teste) {
        console.log(`Prazer em te conhecer ${String(data).replace(os.EOL, '')}!\n`)
        process.exit()
    } else if (teste === false) {

        process.stdout.write('Oi, tem alguem aí? S / N  ')
        process.stdin.on('data', data => {
            let res = data.toString().toLowerCase().replace(os.EOL, '')

            if (res == 's') {
                process.stdout.write('Qual o seu nome?\n')
                process.stdin.on('data', async data => {
                    const nome = data.toString().toLowerCase().replace(os.EOL, '')

                    process.stdout.write(`Prazer em te conhecer ${nome}!\n`)
                    process.exit()
                })
            } else if (res == 'n') {

                process.stdout.write(` Uma pena queria tanto te conhecer!`)
                process.exit()
            }
        })
    }

})
