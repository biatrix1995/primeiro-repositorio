//Para interagir com o user:

alert("Código Funcionando!") //mostrar mensagem para o usuário
const nomeUsuario = prompt("Olá, user! Qual seu nome?") //mostre uma mensagem e recebe um valor

//qualquer coisa digitado no prompt vai ser texto, a menos que:

let num = Number(prompt ("Olá, "+ nomeUsuario + "! Digite algum número, por favor! (:")) 
console.log(typeof num) //qual o tipo que a varrável tipo está guardando

//adicionar valor para uma variável:

const antecessor = num - 1

alert(" O antecessor de " + num + " é " + antecessor)

//adicionar valor para uma variável + fácil com operadores de incremento: ++

const sucessor = num++

alert(" O sucessor de " + num + " é " + sucessor)

console.log(num++) //operador pós-incremento
console.log(num)
console.log(++num) //operador de pré-incremento


//operadores de decremento

console.log(num--) //operador de pós-decremento
console.log(num)
console.log(--num) // operador de pré-decremento

