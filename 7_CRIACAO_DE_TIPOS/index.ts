//1 - Generics
/* O proposito do generic é transformar o que é passado
   em um argumento valido para a função respeitando as regras dela*/
function showData<T>(arg: T):string{
    return `O dado é: ${arg}`
}

console.log(showData(5))
console.log(showData("nome do usuário"))
console.log(showData(true))
console.log(showData(["true", "xx", 5]))

//2 - Constraints em generics
/* As constraints nos ajudam a limitar os tipos aceitos
   como em generic elaspodem ter qualquer tipo, as constraints filtram os aceitos
   adiciona organização para aproveitar a liberdade dos generics
*/
function showProductName<T extends {name: string}>(obj: T){
    if(!obj.name){
        return `erro`
    }
    return `O nome do produto é: ${obj.name}`
}
/* mesmo que o objeto passado tenha outras propriedades elas nao importam
   pois na declaração da função definimos que o generic teria apenas a propriedade name
   se houver a propriedade name no objeto ele vai aceitar caso nao tenha ai da erro
*/
const product = {name: "Lápis", cor: "Azul"}
const product2 = {color: "green", name: "Carro"} //ok
console.log(showProductName(product))
console.log(showProductName(product2))


//const product1 = {age: 15, country: "BR"}
//console.log(showProductName(product1)) //erro

//3 - Interface com generics
/*  com interfaces podemos criar tipos mais complexos
    adicionando generics podemos deixalos mais brandos
    aceitando tipos diferentes em ocasioes diferentes
*/

interface MyObject<T, U, Q>{
    name: string
    wheels: T
    engine: U
    color: Q
}

//com o type conseguimos unir generics e interfaces criando um objeto mais poderoso
//manipulando totalmente os tipos aceitos
type car = MyObject<number, number, string>
type pen = MyObject<boolean, boolean, string>

//aqui criamos os objetos seguindos as interfaces com os generics aplicados
const myCar:car = {name: "fusca", wheels: 4, engine: 2.1, color: "Verde"}
const myPen:pen = {name: "Bic", wheels: false, engine: false, color: "Azul"}

console.log(myCar)
console.log(myPen)