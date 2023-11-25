"use strict";
// 1 - arrays[]
let numbers = [1, 5, 6, 8];
numbers.push(3);
console.log(numbers[2]);
const nomes = ["Maria", "Joao", "André"];
nomes.push("Ale");
console.log(nomes);
//outra sintaxe Array (menos utilizada)
const nums = [1, 3, 4];
nums.push(9);
console.log(nums);
//2 - any
//com o any a tipagem fica fraca e pode não ser interessante
const arr1 = [3, 'ola', false, []];
arr1.push([5, 6, 7]);
console.log(arr1);
//3 - parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(3, 1);
// soma(3, '1')
//4 - retorno de função
function greeting(name) {
    return `Olá, ${name}`;
}
console.log(greeting("Lucas"));
//5 - funções anonimas
//o TS ajuda fazendo validações do codigo digitado, dando dicas de possiveis erros
setTimeout(function () {
    const salary = 1000;
    //console.log(parseFloat(salary))
    //console.log(salary)
}, 2000);
//6 - tipos de Objetos
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = { x: 3.244, y: 84.2 };
passCoordinates(objCoord);
//passCoordinates({x: 322, y: 345}) erro
//7 - propriedades opcionais
//declarar a variavel com "nomeVar?" torna ela opcional
//apenas o ultimo argumento pode ser opcional
function showNums(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNums(1, 2, 4);
showNums(5, 3);
//8 - Validar parametros opcionais
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Ola, ${firstName} ${lastName}, tudo bem?`;
    }
    //essa validacao acima é uma early return
    //(quando retornamos algo antes pq ja chegou em uma condição que é suficiente)
    //é uma otimização de função
    return `Olá, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting("Lucas", "Maciel"));
console.log(advancedGreeting("Diniz"));
//9 - union types
//é uma alternativa ao any, podemos determinar dois tipos para um dado
function showBalance(balance) {
    console.log(`O saldo da conta é ${balance}`);
}
showBalance('300');
showBalance(500);
//showBalance(true) error
//10 - Avançando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não Aprovado!";
    }
    return `A função do usuário é ${role}`;
}
console.log(showUserRole("Admin"));
console.log(showUserRole(false));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId(12);
showId("256");
// function showCoords(obj: {x: number, y: number, z: number} )
function showCoords(obj) {
    console.log(`x: ${obj.x}, y: ${obj.y}, z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 25,
    z: 30
};
showCoords(coordObj);
const ps = { name: 'lfm', age: 12 };
console.log(ps);
// type personType = {
//     age: number
// }
//15 - literal type
//permite colocar valores como tipos, restringe nao só a tipos mas tbm aos valores passados
// é um recurso muito utilizado com union type
let test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(`A direção é ${direction}`);
}
showDirection("right");
// showDirection("top") error
showDirection("left");
//16 - non-null Assertion operator
//é um erro que o ts da baseado num valor q ainda não está disponivel
//se sabemos que o valor ficara disponivel utilizamos o caractere "!"
const p = document.getElementById("some-p");
//console.log(p.innerText) // error
//usamos a exclamação quando gente sabe q ta la mas o TS nao consegue identificar
console.log(p.innerText);
