//Os parametros dentro de JS costumam ser bem flexiveis. Vejamos os exemplos abaixo:


function logParams(a,b,c){
    console.log(a,b,c)
}

//Caso eu invoque a função passando os 3 parametros, o retorno será os 3 parametros

logParams(1,2,3)


//Caso eu invoque a função passando mais parametros do que a função espera, o JS irá ignorar o 'a mais' e me retornará apenas o que ela usou

logParams(1,2,3,4,5)

//E caso eu passe menos parametros que a função espera, o JS me retornará os parametros que ela conseguiu definir e dará 'undefined' para o parametro que faltar

logParams(1,2)

//Existe a possibilidade de se colocar valores fixos a um parametro. Vejamos

function defaultParams(a,b,c = 3){
    console.log(a,b,c)
}

defaultParams(7,8,9)

//Para da um valor a um parametro eu devo retornar ao código e usar '=' e o valor.

defaultParams(7,8)

//Desta forma, sempre que um parametro nao for definido quando invocado, a função irá assumir que o parametro vale o valor previamente configurado. Cabe entendimento de que na configuração da função, é feito o valor padrão mas quando invoco a função é totalmente possivel que esse valor padrao seja substituído, somente se mostrando quando não for substituído.


//Existe uma forma de passar uma quantidade parametros indefinidas, para isso, se criou a forma 'spread/rest', o retorno será um Array.

//O opodedor spread/rest usa '...' antes do parametro, fazendo assim, que essa função possa receber uma quantidade variável de parametros.

function logNums(...nums){
    console.log(nums)
}

logNums(1,2,3,4,5,6,7,8,9,10)


//Nota-se, que dessa forma, o retorno será um Array

//Uma aplicação fácil para fortalecer esse raciocinio, é uma funcao que soma todos os números.

function sumAll(...nums){
    let total = 0
    for(let n of nums){
        total += n
    }
    return total
}

console.log(sumAll(1,2,3,4,5,6,7,8,9,10))

