/**
 * Arrays ou Vetores é um tipo especial que te permite armazenar diferentes tipos valores em apenas um local, números, booleanos, strings...
 */

//criando um array:

//let arr = new Array() /**sem valor inicial */
//let arr2 = new Array(5) /**com valor inicial */
//let arr = [] /** mais usada */
// falar pro array qual posição vocÊ quer []
//a primeira posição de um array, é a posição 0.
//na programação, sempre começa a contar do zero, e não do um
//sempre considerar -1 para a posição desejada
//undefined = nada
//sempre que você tentar recupar uma posição que não existe, ele te informará "undefined"

let arr = [10, 15, 9.8, 'Eu sou um texto dentro de um array', ' Olá, mundo', true, false, false]
console.log(arr[20])
arr[6] = 'Outro texto'
console.log(arr[6]) //muda o conteúdo da variável na posição 6
console.log(arr[8])
arr[8] = 'Agora a posição 8 existe no meu arr'
console.log(arr[8])


