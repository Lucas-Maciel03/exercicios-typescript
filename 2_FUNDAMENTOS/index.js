// 1- number
var x = 20;
console.log(x);
var y = 3.142345323;
console.log(typeof y);
console.log(y);
console.log(y.toPrecision(3));
//2 - string
var firstName = "Lucas";
console.log(firstName.toUpperCase());
var fullName;
var lastName = "Maciel";
fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);
//3 - boolean
var a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
// 4 - inference e anotation
//annotation
var ann = "Anotation";
//inference - aqui vc nao declara o tipo de dado, o TS já entende automatico
var inf = "Inference";
//inf = 1 // vai dar erro pois o TS entende que a variavel inf só pode receber string
