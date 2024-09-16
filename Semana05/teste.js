let declaracao1 = 'Escopo do bloco'
var declaracao2 = 'Escopo da funcao'
const declaracao3 = 'Escopo de bloco'

let preco = 40
preco++
let resultado = preco > 60 ? 'livro caro' : 'livro barato';
console.log(preco)
console.log(resultado)

//Objetos
const meuObjeto = {
    propriedade1 : 'um texto',
    propriedade2 : 100,
    endereco : {
        logradouro : 'rua 1',
        numero : 34
    }
}

// para adicinar uma propriedade no objeto : meuObjeto.telefone = '21019102029'

// para deletar uma propriedade no objeto : delete meuObjeto.telefoni

console.log(meuObjeto.propriedade2)
console.log(meuObjeto.endereco.logradouro)

//Funções
// o Js é de execução async -> não é igual ao python que tem uma ordem na ordem de escrita, pode ser diferente
function nomeDaFuncao (x, y) {
    return x + y
}
const func2 = function (a, b) {
    return a * b
}
// arrow function -> se tem um parametro você não precisa usar parenteses
/*
    Arrow function só e usada com mais frequência pq é mais rápida de ser usada.
*/
const func3 = (entrada) => {
    return entrada + ' é bonito'
}

const func4 = entrada => entrada + ' é bonito'


/*
    Para ver a lista no console é só escrever o nome da lista 
    Para adicionar um elemento na lista é só minha_lista[10] = valor
    
*/
const minha_lista = [25, 'casa', [34,12], 9.65]
//minha_lista.forEach((el) => console.log(el))


// Desafio
function teste(x) {
    console.log(x)
}
function testeDoForEach(lista) {
    lista.forEach(teste);
}

//Desafio
const funcaoComNome = elemento => console.log(elemento)
minha_lista.forEach(funcaoComNome)
