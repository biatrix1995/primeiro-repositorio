/**Operadores lógicos, assim como de comparação, servem para retornar valores booleanos */
/** V - verdadeiro / F - falso */
/**1-Operador lógico "e" , todas as condições precisam ser verdadeiras.*/
/**Tabela Verdade do E:&&
 * V V = V
 * F V = F
 * V F = F
 * F F = F
 */
//Exemplo: Para passar de ano, o aluno precisa ter média MAIOR ou IGUAL a 7 ****e**** ter no mínimo de 80% de presença.
const media = (7 + 10 + 10) / 3
const presenca = 0.95
console.log(media >= 7 && presenca >=0.8)
/**2-Operador lógico OU */
/** Tabela Verdade do OU: */
/**
 * V V = V
 * F V = V
 * F V = V
 * F F = F
 */
//Exemplo:
console.log(4 > 7 || 3 < 2) //false
console.log(5 > 3.5 || 7 > 8) //true

const estado = "MG"
console.log(estado == "SP" || estado == "MG")

const idade = 30
console.log( idade >= 16 || idade < 60)

/**3-Operador NÃO "!" - Testa se o valor de uma variável é Falso */
/**
 * 0 - DESLIGADO (False)
 * 1 - LIGADO (True)
 */
/**Tabela Verdade do Não
 * NOT V - F
 * NOT F - V
 */
//Exemplo:
const resultado = 5 < 3
console.log(!resultado)
