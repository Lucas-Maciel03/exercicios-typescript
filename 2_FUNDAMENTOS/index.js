"use strict";
//comandos TS
/*
    para compilar quando salvar o arquivo: tsc -w
    para criar o arquivo tsconfig: tsc --
*/
// 1- number
let x = 20;
console.log(x);
let y = 3.142345323;
console.log(typeof y);
console.log(y);
console.log(y.toPrecision(3));
//2 - string
const firstName = "Lucas";
console.log(firstName.toUpperCase());
let fullName;
const lastName = "Maciel";
fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);
//3 - boolean
let a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
// 4 - inference e anotation
//annotation
let ann = "Anotation";
//inference - aqui vc nao declara o tipo de dado, o TS já entende automatico
let inf = "Inference";
//inf = 1 // vai dar erro pois o TS entende que a variavel inf só pode receber string
console.log('olaaaaa2');
