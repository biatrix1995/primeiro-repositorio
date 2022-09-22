/** 
 * As estruturas/laços de Repetição, são estruturas que nos permitem repetir partes do nosso código de maneira mais simples.
 * Iremos aplicar no desafio de ontem:
*/
/** While quer dizer "enquanto", executa parte de um código e precisa de uma condição booleana que seja verdadeira.
 * Sempre que der verdadeiro, ele repete.
*/

let precoProduto = parseFloat(prompt("Qual o preço do produto?"))

while (isNaN (precoProduto)|| precoProduto <= 0) {
    alert('O preço digitado é inválido! Por favor, informe o preço do produto APENAS COM NÚMEROS. Sem caracteres especiais, letras e acentos.')
    precoProduto = parseFloat(prompt('Qual o preço do produto?'))
}

const mensagem = `
Por favor, informe qual é o método de pagamento:
Digite 1 para pagamento em dinheiro
Digite 2 para pagamento em cheque
Digite 3 para pagamento em cartão
`
let metodoDePagamento = parseInt(prompt(mensagem))

while (metodoDePagamento <1 || metodoDePagamento >3) {
    alert('O modo de pagamento digitado é inválido! Por favor, selecione a opção 1, 2 ou 3!')
    metodoDePagamento = parseInt(prompt(mensagem))
}

if (metodoDePagamento == 1 || metodoDePagamento == 2) {
    const precoFinal = precoProduto * 0.90
    alert(`O preço final de pagamento é ${precoFinal.toFixed(2)} reais`)
} else if (metodoDePagamento == 3) {

    /**
     * 1 parcela = 15% de desconto
     * 2 parcelas = preço do produto
     * 3 ou mais parcelas = acrescimo de 10%
     */
    const parcelas = parseInt(prompt("Informe a quantidade de parcelas desejadas:"))

    if(parcelas==1){
        const precoFinal = precoProduto * 0.85
        alert(`O preço final de pagamento é ${precoFinal.toFixed(2)} reais`)
    } else if(parcelas==2){
        const precoFinal = precoProduto
        alert(`O preço final de pagamento é ${precoFinal.toFixed(2)} reais`)
    } else {
        const precoFinal = precoProduto * 1.10
        alert(`O preço final de pagamento é ${precoFinal.toFixed(2)} reais`)
    }
}