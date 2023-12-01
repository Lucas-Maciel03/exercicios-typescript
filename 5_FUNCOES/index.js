"use strict";
//1 - função sem retorno (void)
function withoutReturn() {
    console.log('Essa função não tem retorno!');
    //return 2
}
withoutReturn();
//2 - callback como argumento
function greeting(name) {
    return `Olá, ${name}`;
}
//f: (name: string) - é a callback
//=> string - é o tipo de retorno da função
function preGreeting(f, userName) {
    console.log('Preparando chamada!');
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Lucas");
preGreeting(greeting, "cas");
preGreeting(greeting, "dds");
//3 - generic function
//a sintaxe <T> simboliza generic
//esta dizendo que o arr é do tipo T ou seja Generico(ele não sabe q tipo de dao vai vir)
//o simbolo que define generico é <> as letras dentro são so pra representar....
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([4, 5, 8, 10]));
console.log(firstElement(["f", "h", "b", "z"]));
//console.log(firstElement("teste")) erro pois está esperando um array
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const newObject = mergeObjects({ name: "Matheus" }, { age: 33, job: "DEV" });
console.log(newObject);
//4 - constraints nas generics functions
//<T extends> significa que esse generic so ira aceitar tipos number ou string 
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(3, 5));
console.log(biggestNumber("8", "1"));
//erro pois so usamos 1 generic entao os dois tipos tem q ser igual
//console.log(biggestNumber("8", 1)) 
//console.log(biggestNumber(3, true)) erro
//5 - especificar tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([2, 7, 5], [8, 5]));
//para usar tipos diferentes nos arrays utilizamos a sintaxe abaixo
console.log(mergeArrays([2, 7, 5], ["fs", "ccv", "pll"]));
//geralmente utilizamos quando estamos usando uma lib de terceiros e
//nao da pra editar a função ai fazemos da maneira acima 
//6 - parametros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    return `Olá ${name}!`;
}
console.log(modernGreeting("Lucas"));
console.log(modernGreeting("Lucas", "Sr."));
//7 - parametro default
//o parametro default tipa por inferencia e preenche o valor caso não tenha um valor passado pra ele
function soma(n, m = 12) {
    return n + m;
}
console.log(soma(10));
console.log(soma(80, 5));
