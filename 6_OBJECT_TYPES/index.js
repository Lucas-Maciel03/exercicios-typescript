"use strict";
function showProducctDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu valor é R$${product.price}`);
    if (product.isAvailable) {
        console.log(`O produto está disponivel!`);
    }
}
const shirt = {
    name: "blusa",
    price: 10.50,
    isAvailable: true
};
showProducctDetails(shirt);
showProducctDetails({ name: "Tenis", price: 54.53, isAvailable: true });
function showDetail(user) {
    console.log(`Email do usuario: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuario é: ${user.role}`);
    }
}
const u1 = { email: "lucas@email.com", role: "top" };
const u2 = { email: "fm@email.com", };
showDetail(u1);
showDetail(u2);
const fusca = { brand: "Wlk", wheels: 4 };
console.log(fusca);
//fusca.wheels = 5 //erro essa propriedade é so para leitura e nao pode ser alterada
fusca.brand = "x";
let coords = { x: 10 };
coords.y = 15;
console.log(coords);
const pessoa1 = { name: "Lucas", age: 21 };
console.log(pessoa1);
const goku = { name: "Goku", age: 50, superPowers: ["genki dama", "teleporte"] };
console.log(goku);
console.log(goku.superPowers[0]);
const arnold = {
    name: "Arnold",
    type: "Pistoll",
    caliber: 9
};
console.log(arnold);
//7 - readyonly array
/*  deixa os elementos do array como readonly
    podemos aplicar um tipo para os itens do array
    a modificação de itens pode ocorrer atraves de metodos mas nao podemos aumentar o array
*/
let myArray = ["Banana", "Uva", "Abacaxi"];
//myArray[3] = "Maça" //sem o ReadOnlyArray esse comando iria adicionar "Maça" ao array
console.log(myArray);
//sao permitidas modificações atraves de metodos, porem modificações diretas nao sao
myArray.forEach((item) => {
    console.log(`Fruta: ${item}`);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
