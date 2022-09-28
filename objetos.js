/**
 * Objeto é uma estrutura que permite organizar dados na forma de chave-valor
 * cada chave terá uma PROPRIEDADE ou ATRIBUTOS
 * funções que estão dentro de objetos, chamam-se MÉTODO.
 * A ideia de um algoritmo é executar
 */

let end = {
        rua: 'Rua sem nome',
        numero: '1500',
        estado: 'Westeros',
        complemento: 'Fortaleza Vermelha',
        CEP: '00011-222',
}

let pessoa = {
    nome: 'Daenerys',
    idade: '25',
    cpf: '555.444.333-22',
    Altura: 156,
    Endereco: {...end}, /**os tres pontos são um operador chamado Destructuring, que cria um novo objeto sem interferir nos atributos/propriedades do principal  */
    solteiro: true,
    habilidades: ['React', 'Java', 'Javascript', 'Golang', 'Rust'],
    cumprimentar() {
        /**
         * Quando eu desejo referenciar o mesmo objeto dentro dele mesmo, eu utilizo a palavra chave 'this'
         */
        console.log(`Olá, tudo bem? meu nome é ${this.nome}, tenho ${this.idade} anos e meu cpf é ${this.cpf}`)
    }
}

/*console.log(end)
console.log(pessoa.Endereco.complemento) /** vai pegar as habilidades da pessoa */

pessoa.cumprimentar()

//o parenteses faz o código executar

pessoa.nome = 'Pablo Escobar'
pessoa.cumprimentar()
pessoa.habilidades.push('Angular')
console.log(pessoa.habilidades)
console.log(pessoa[`cpf`])
console.log(pessoa.Endereco.rua)
pessoa.Endereco.rua = 'Rua Secundária'
console.log(pessoa.Endereco.rua)
console.log(end.rua)