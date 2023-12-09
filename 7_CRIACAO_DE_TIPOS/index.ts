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

//4 - type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K){
    return `A chave ${[key]} está presente no objeto e tem valor de ${obj[key]}`
}
/*  com essa notação <T, K extends keyof T> podemos ter a seguranca de que
    apropriedade (key) esteja realmente presente dentro do objeto (obj)
*/
const server = {
    hd: "2TB",
    ram: "32GB"
}

console.log(getSomeKey(server, "ram"))
//console.log(getSomeKey(server, "teste")) //erro pois a propriedade teste nao existem server

//5 - keyof type operator
/*  ele linka quase como se fosse o exemplo anterior
    ele nao sabe o que esta pra vir exatamente
    mas ele quer que seja uma chave que esteja presente no objeto passado
    que foi tipado pelo keyof
*/
type Character = { name: string, age: number, hasDriveLicense: boolean }

type C = keyof Character

function showCharName(obj: Character, key: C) {
    return `${obj[key]} `
}

const myChar: Character = {
    name: "Lucas",
    age: 21,
    hasDriveLicense: true
}

console.log(showCharName(myChar, "name"))
console.log(showCharName(myChar, "age"))
//console.log(showCharName(myChar, "idade")) //erro, esse parametro n tem no objeto myChar
