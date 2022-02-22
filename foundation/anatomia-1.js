// Function declaration

//function - Palavra reservada para criação de funcção


//function sayHelo() - Neste caso, 'sayHello()' é o nome da função!

function sayHello(){
    console.log('Hello!')
}

//Nota-se que mesmo que eu rode o código, o meu retorno será nada, pois eu ainda não invoquei a função. Portanto, é importante lembrar de sempre invoca-lá

sayHello() //Essa é uma função que nao recebe nenhum parametro e nao retorna nada

//Agora, criaremos uma outra função que será incluído parametros nela

function sayHelloTo(name){
    console.log(`Hello ${name}`)
}

sayHelloTo('Erick')

//Se por ventura eu invoque a função sem passar nenhum parametro, o retorno será 'undefined' pois o mesmo não está definido.


//Agora criaremos outra função que retorna valor

function returnHi(){
    return 'Hi!'
}

//Caso eu invoque somente a função, nao será imprimido nada no console, pois de fato eu não pedi para que fosse impresso. Neste caso, uma das opções é jogar este retorno dentro de uma variável e imprimir a variável

let hi = returnHi()
console.log(hi)

//Também posso chamar a função diretamente dentro do console.

console.log(returnHi())


//Agora criaremos uma função que recebe um parametro e retorna alguma coisa.

function returnHiTo(name){
    return `Hi ${name}!`
}

//Desta forma, posso apenas invocar a função dentro do console e passar o parametro dentro dela mesma.

console.log(returnHiTo('Erick'))

//Estas são as quatros formas BÁSICAS de se criar uma função, todas usando function declaration.