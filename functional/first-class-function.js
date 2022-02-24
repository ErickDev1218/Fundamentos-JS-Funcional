//First class function é um conceito que diz que a função dentro da linguagem de programação é um 'cidadão de primeira classe'. É justamente quando uma função é tratada como qualquer outro valor dentro da linguagem. Quando uma linguagem permite voce armazenar uma função dentro de uma variável e constantes, significa que ela suporta o conceito de first class function.

const add = function (a,b){
    return a+b
}

const subtract = function (a,b){
    return a-b
}

const multiply = (x,y) => x*y
const divide = (x,y) => x/y




console.log(add(10,20))
console.log(subtract(10,20))
console.log(multiply(10,20))
console.log(divide(10,20))