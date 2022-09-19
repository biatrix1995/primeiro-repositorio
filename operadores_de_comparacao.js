/** Operadores de comparação, servem para verificar se é verdadeiro(true) ou falso(false), fazendo com que o nosso código tome rumo diferentes de acordo com o que desejamos. */

/** 1-Comparador de Igualdade: */
const msg = "Eu sou uma mensagem"
const msg2 = "Eu sou outra mensagem"
console.log(msg == msg2) //false
/**Sinal de Igual é usado para atibuir valor, e não para comparar. Para comparar, é necessário colocar == */
const num = 5
const num2  = 5
console.log(num == num2) //true
let a = 78
let b = "78"
console.log(a == b) //true
/**No Java, ele compara o conteúdo da variável, e não o tipo, palavra, número. */

/** 2-Comparador de Identidade - Se o conteúdo da variável é IDÊNTICO */
console.log(a === b)

/** Tipagens Dinâmicas e Tipagens Estáticas */
let c = 5 //number
c = "Olá mundo" //string

/** 3-Comparador de Diferença: */
console.log(msg != msg2) //true
console.log(a != b) //false

/** 4- Comparador de Diferenças de Identidade (Forma e Conteúdo) */
console.log(msg !== msg2)
console.log(a !== b)

/** 5-Comparador de Maior, Menor ou Igual*/
a = 56
b = 30
console.log(a>b) //true
let c = 500
let d = 500
console.log(c>=d) //true
console.log(3<7.5) //false
console.log(8 <= 8) //true