const texto =  '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNove = RegExp('9')
console.log('Métodos da RegEx...')
console.log(regexNove.test(texto)) // Retorna true ou false da busca da regex
console.log(regexNove.exec(texto)) // Retorna o valor que foi encotrado, index (posição), input (onde), e os groups

const regexLetras = /[a-f]/g
console.log('Métodos da String...')
console.log(texto.match(regexLetras)) // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(texto.search(regexLetras)) // Retorna o indice do primeiro match, 20
console.log(texto.replace(regexLetras, 'Achei')) // 0,1,2,3,4,5,6,7,8,9,Achei,Achei,Achei,Achei,Achei,Achei
console.log(texto.split(regexLetras)) // [ '0,1,2,3,4,5,6,7,8,9,', ',', ',', ',', ',', ',', '' ]