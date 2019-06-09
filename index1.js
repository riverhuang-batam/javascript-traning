let i = -199;
if (i % 2 === 0 && i > 0) {
    console.log('genap positif')
} else if (i % 1 === 0 && i > 0) {
    console.log('ganjil positif')
} else if (i % 2 === 0 && i < 0) {
    console.log('genap negatif')
} else if (i % 1 === 0 && i < 0) {
    console.log('ganjil negatif')
}

showStars(5)

function showStars(rows) {

    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let i = 5; i >= row; i--) 
            pattern += ' '

        for (let m = 1; m <= row; m++) 
            pattern += '*'
        for (let n = 1; n < row; n++) 
            pattern += '*'
        console.log(pattern)
    }
}
let patterns = ''

for (let i = 1; i <= 5; i++) {
    patterns += '\n'
    for (let u = 5; u >= i; u--) 
        patterns += ' '
    for (let o = 0; o < i; o++) 
        patterns += '*'
    for (let y = 1; y < i; y++) 
        patterns += '*'

}
console.log(patterns)

let patterns1 = ''

for (let i = 1; i <= 5; i++) {
    patterns1 += '\n'
    for (let o = 0; o < 10; o++) 
        patterns1 += '*'
 

}
console.log(patterns1)