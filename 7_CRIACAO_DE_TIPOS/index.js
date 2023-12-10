"use strict";
//1 - Generics
/* O proposito do generic é transformar o que é passado
   em um argumento valido para a função respeitando as regras dela*/
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData("nome do usuário"));
console.log(showData(true));
console.log(showData(["true", "xx", 5]));
//2 - Constraints em generics
/* As constraints nos ajudam a limitar os tipos aceitos
   como em generic elaspodem ter qualquer tipo, as constraints filtram os aceitos
   adiciona organização para aproveitar a liberdade dos generics
*/
function showProductName(obj) {
    if (!obj.name) {
        return `erro`;
    }
    return `O nome do produto é: ${obj.name}`;
}
/* mesmo que o objeto passado tenha outras propriedades elas nao importam
   pois na declaração da função definimos que o generic teria apenas a propriedade name
   se houver a propriedade name no objeto ele vai aceitar caso nao tenha ai da erro
*/
const product = { name: "Lápis", cor: "Azul" };
const product2 = { color: "green", name: "Carro" }; //ok
console.log(showProductName(product));
console.log(showProductName(product2));
//aqui criamos os objetos seguindos as interfaces com os generics aplicados
const myCar = { name: "fusca", wheels: 4, engine: 2.1, color: "Verde" };
const myPen = { name: "Bic", wheels: false, engine: false, color: "Azul" };
console.log(myCar);
console.log(myPen);
//4 - type parameters
function getSomeKey(obj, key) {
    return `A chave ${[key]} está presente no objeto e tem valor de ${obj[key]}`;
}
/*  com essa notação <T, K extends keyof T> podemos ter a seguranca de que
    apropriedade (key) esteja realmente presente dentro do objeto (obj)
*/
const server = {
    hd: "2TB",
    ram: "32GB"
};
console.log(getSomeKey(server, "ram"));
function showCharName(obj, key) {
    return `${obj[key]} `;
}
const myChar = {
    name: "Lucas",
    age: 21,
    hasDriveLicense: true
};
console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "age"));
//console.log(showCharName(myChar, "idade")) //erro, esse parametro n tem no objeto myChar
//6 - typeof type operator
//é uma forma de declarar a variavel igual ao tipo de outra variavel
//conseguimos usar o typeof para a criação de tipos e não so para verificação
const userName = "Lucas";
const userName2 = "Maria";
const userName4 = "Diniz";
const newTruck = {
    km: 2000,
    kg: 1900,
    description: "caminhao pequeno"
};
function showKm(km) {
    console.log(`O veiculo tem km de ${km}`);
}
showKm(newTruck.km);
/*  a indexed access nos da uma liberdade maior
    podendo ser utilizado em outros objetos que tenham chave do mesmo tipo.
    ja a indexof nos liga ao objeto principal
*/
const newCar = {
    km: 1000,
    kg: 800,
    description: "carro novo"
};
showKm(newCar.km);
