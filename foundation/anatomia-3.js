// Arrow Function

//Como criaremos arrow functions a partir de function expression?

//Primeiro, montaremos uma function expression

const increment1 = function (n){
    return n +1
}

console.log(increment1(1))

//Agora para transformar em function arrow, basta tirar a palavra 'function' e usar o simbolo => após os parametros. Um detalhe é que a function arrow sempre é uma função anonima.

const increment2 = (n) => {
    return n +1
}

console.log(increment2(5))


//Quando temos um unico parametro numa function arrow, não se faz necessario usar os paranteses '()'

const increment3 = n => {
    return n +1
}
console.log(increment3(24))


//Para simplificar ainda mais a function arrow, podemos escrever tudo em uma única linha, mas, desta forma, precisaremos tirar os escopos e também a palavra 'return' que já fica implicita. Mas caso eu queira usar o 'return' eu devo usar os escopos normalmente.

const increment4 = n => n + 1

console.log(increment4(199))

//Caso eu queira fazer uma funcao que tenha parametros, eu me obrigado a usar os parateses '()'

const sum = (a,b) => a + b
console.log(sum(3,8))