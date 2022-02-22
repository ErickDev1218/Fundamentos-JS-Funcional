//Função anonima

//É uma função sem nome, começaremos usando a palavra reservada, vai definir os parametros desta função e depois solicitar um retorno.

(function (a,b,c){
    return a+b+c
})

//Function expression

//O conceito de function expression envolve muito função anonima. Portanto, como eu crio uma function expression a partir de uma função anonima?
//Basta que eu crie uma variável atribundo seu valor a uma variável

const sum = function(a,b){
    return a+b
}

//Invocando a função

console.log(sum(2,7))

//O que eu posso fazer também é colocar essa expressao dentro de uma outra expressao, fazendo assim, que uma variável aponte para outra variável que aponta para a função

const anotherSum = sum
console.log(anotherSum(39,22))

//Posso também declarar uma variável

let x = 3
console.log(x)

//E depois, muda-lá jogando o valor de uma função dentro dela

x = sum
console.log(x(4,7))

//Desta forma, vemos que 'x' aponta para dois valores