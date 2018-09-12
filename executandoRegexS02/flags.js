// g - global
// i - ignore case

const texto = 'Carlos assinou o abaixo-assinado.'

console.log(texto.match(/C|ab/)) // match na posição 0
console.log(texto.match(/c|ab/)) // match na posição 17
console.log(texto.match(/c|ab/i)) // match na posição 0
console.log(texto.match(/ab|c/gi)) // [ 'C', 'ab' ]