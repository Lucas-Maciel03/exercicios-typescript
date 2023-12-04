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
