//Na aula de hoje vamos nos aprofundar no estudo das STRINGS

//1-Delimitar strings: Aspas

//const aspasSimples = 'Olá, mundo!'
//console.log(aspasSimples)

//2-Caracteres de escapes (quebra de linha, etc): \n

const aspasDuplas = "Olá eu sou o Javascript. \nEu sou melhor que o Python!"
//console.log(aspasDuplas)

//3-Delimitação de texto utilizando Crase, permite quebrar linha sem espape:

const textoComCrase = `Olá eu sou o Javascript.
Eu sou melhor que o Python!`
//console.log(textoComCrase)

//4-Concatenação = Juntar vários dados em uma única mensagem com + ou com ${``}

//5-Métodos dos Strings

const texto = "O Javascript foi criado alguns anos após o Python. No entando, o Javascript é bem mais bacana."

console.log(texto)
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())
console.log(texto.concat(" A linguagem C é a mãe de todas as Linguagens."))
//console.log(texto[2],texto[1])
console.log(texto.substring(2,12))
//case sensitive - Ou seja, reconhece Maiúsculas e minúsculas.
console.log(texto.replace('Javascript','Rust')) // substitui apenas a primeira ocorrência
console.log(texto.replaceAll('Javascript','Kotlin')) //substitiu todas as ocorrências da palavra
console.log(texto.replace(/Javascript/g,'PHP'))
console.log(texto.replace(/Javascript/gi,'PHP'))

//6-Leitura de arquivos

const html = '<!DOCTYPE html>\n<html></html>'

console.log(html.startsWith('<!DOCTYPE html>')) // procura se começa com 
console.log(html.endsWith('</body>')) // procura se termina com

const mensagem = '             Olá, Mundo           '
console.log(mensagem)
console.log(mensagem.trim()) //remove o espaço tanto no início quanto no fim


//7-Quantidade de Caracteres no texto: length

let senha = 'sonic'

console.log(senha.length >= 8)