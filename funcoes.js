/**
 * Funções são blocos de de consrução fundamentais em JavaScript. Uma função é um procedimento de Javascript- um conjunto de instruções que executa uma ou calcula um vetor. Para usar uma função, você deve defini-la em algum lugar no esboçodo qual você quiser chamá-la.
 */
//A FUNÇÃO SEMPRE TEM QUE TER UM NOME PRA FUNCIONAR
//Quando a gente vai passar passar uma funçaõ para outra função, precisamos chamar a referencia dela
/*
ParÂmetros são valores que passamos para as funções, para que elas utilizem esses valores dentro delas
fuction nome_da_funcao(){}
dentro do () eu coloco o valor o parametro q vai chama ela
Parâmetros não precisam usar variáveis "let/var/const"
e nem aspas.
*/ 
/*Variavel guarda um valor, e a fução guarda uma atividade/*
sempre que uma palavra estiver acompanhada de um parenteses ela é uma função*/
/*O log é uma função representada dentro do console*/
/** O ponto é quando eu quero acessar a propriedade do meu objeto */

/*function cumprimentar(){
    alert('Olá a todos!')
}

function cumprimentar(mensagem, repetir = 2){
    for ( let i = 1; i <= repetir; i++ ){
        alert(mensagem.toUpperCase())
    }
}

cumprimentar('Olá, mundo!')
cumprimentar('Eu gosto muito do javascript!')
cumprimentar('Javascript sova o C#!')
*/

function soma(num1, num2){
    return num1 + num2
}

/**O return significa que vai te retornar o resultado daquela função*/

let resultado = soma(4, 7)
console.log(`O valor da variável resultado é ${resultado}`)

function maiorValor(a,b){
    if(a > b) {
        return a
    } else {
        return b
    }
}

const num1 = parseInt(prompt(`Informe o primeiro número`))
const num2 = parseInt(prompt(`Informe o segundo número`))

alert(`O maior número dentre esses é ${maiorValor(num1, num2)}`)

/*
Para interagir com o user e passar o valor da variável pra função:
Exemplo:
function cumprimentar(mensagem, repetir){
    for(let i=1; i<= repetir; i++){
        alert(mensagem.toUpperCase())
    }
}

var frase = prompt("digite a frase")
var quant = prompt("quantas vezes")
cumprimentar(frase,quant)

tbm pode pegar os valores assim: cumprimentar(prompt('Olá Mundo'), prompt('repeticao'))

*/

/* **
 * Criem uma função que gera o resultado de uma equação do segundo grau
 * 
 * ax² + bx + c = 0
 * 
 * delta = b² - 4ac
 * b = -b +- raíz de delta / 2a
 */

//*a = 1 b = -1c = -12 resultado = 4 e -3 //

function equaçãoSegundoGrau(a , b, c){
    const delta = b ** 2 - 4 * a * c
    const raizDelta = Math.sqrt(delta)
    const x1 = (-b + raizDelta) / (2 * a)
    const x2 = (-b - raizDelta) / (2 * a)

    return[x1, x2]
}
console.log(equaçãoSegundoGrau(1, -1, -12))

