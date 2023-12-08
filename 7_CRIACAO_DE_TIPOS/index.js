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
