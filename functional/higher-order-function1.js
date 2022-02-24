//Higher order function é quando uma linguagem permite que uma função opere usando outras funções. Usando uma função como argumento para outra função ou até mesmo, retornar uma função apartir de outra função.

function run (fn){
    return fn()
}

function sayHello(){
    console.log('Hello,world!')
}

run(sayHello)
//Da maneira acima, eu passei a referencia de sayHello para dentro de run

//Eu tambem posso declarar uma função anonima na hora de chamar a função run, fazendo assim, que a função anonima virasse um parametro para outra função
run(function(){
    console.log('Run!!')
})

//Posso também armazenar a função run dentro de uma constante e invocala apartir disso

const result = run(Math.random)
console.log(result)