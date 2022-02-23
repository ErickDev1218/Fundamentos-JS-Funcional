//Funcao anonima

//O problema de uma função anomina é justamente invoca-la, pois, como seu proprio nome ja sugere, a mesma é anonima. Nesta linha de pensamento surgiu o termo 'IIFE - Immediately Invoked Function Expression' ou, função imediatamente invocada. Mas como faremos isso? Basta que eu crie uma função anonima seguindo suas regras normais e passe seus parametros no fim dela.

(function (a,b,c){
    console.log(`Resultado: ${a + b + c}`)
})(1,2,3);

//A única atenção que devemos ter para esse tipo de função, é que, se eu tiver mais de uma função no formato IIFE, eu devo sempre termina-la com ';' para que não ocorra problemas.

(function (a,b,c){
    console.log(`Resultado: ${a + b + c}`)
})(1,2,3);


(function (a,b,c){
    console.log(`Resultado: ${a + b + c}`)
})(1,2,3);


//Porém, o mais comum é vermos IIFE que nao passam parametros e são puxadas de dentro delas mesmas.

(function (){
    console.log(`Resultado: 6`)
})();

//Também é permitido criar funções deste tipo em estilo arrow function

(() => {
    console.log('arrow #01')
})();

//Também posso usar no estilo de uma única linha

(() => console.log('arrow #02')) ();
