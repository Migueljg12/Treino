function validBracketSequence(sequence) {
    let armazem = ['(', ')', '[ ', ']', '{', '}']
    let res = armazem.map(x => x.includes(sequence))
    console.log(res)
}

validBracketSequence('[')


function stringsConstruction(a, b) {
    let count = 0
    let finding = true
    let pos
    b = b.split("");
    while (finding) {
        for (let i = 0; i < a.length; i++) {
            pos = b.indexOf(a[i])
            if (pos >= 0) {
                b.splice(pos, 1)
            } else {
                finding = false
                break
            }
        }
        if (finding) {
            count++
        }
    }
    return console.log(count)
}
stringsConstruction(a = 'ab', b = 'abcbcb')

function stringsConstruction(a, b) {
    let A = a.length, B = b.length

    if (A > B) { return A / B } else { return B / A }
}
