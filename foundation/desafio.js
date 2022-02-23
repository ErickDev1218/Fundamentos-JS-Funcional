//range(5) -> [1,2,3,4,5]


/*function range (a,b,s){
    const nums= []
    for(let i = 1; i <= a; i++){
        nums.push(i)
    }
    return nums
}

console.log(range(5))*/


//range(6,11) -> [6,7,8,9,10,11]

/*function range(a,b,s){
    const nums = []
    for(let i = a; i <= b; i++){
        nums.push(i)
    }
    return nums
}

console.log(range(6,11))*/

//range (10,19,2)-> [10,12,14,16,18]

/*function range (a, b, s){
    const num = []
    for(let i = a; i <= b; i+s){
        num.push(i)
    }
    return num
}

console.log(range (10,19,2))*/

//Não consegui resolver mais depois daqui e fui assistir a aula do professor!


/*Crie a funcao range que atenda a todas as necessidas:

range(5) -> [1,2,3,4,5]
range(6,11) -> [6,7,8,9,10,11]
range(10,19,2) -> [10,12,14,16,18]
range(6,2) -> [6,5,4,3,2]
range(8,-3,4) -> [8,4,0]*/

function range (a,b,s = 1){
    const n1 = b === undefined ? 1 : a
    const n2 = b === undefined ? a : b
    const step = n1 <= n2 ? Math.abs(s) : -Math.abs(s)

    const nums= []
    for(let i = n1; n1 <= n2 ? i <= n2 : i >=n2; i += step){
        nums.push(i)
    }
    return nums
}

console.log(range(5))
console.log(range(6,11))
console.log(range(10,19,2))
console.log(range(6,2))
console.log(range(8,-3,4))