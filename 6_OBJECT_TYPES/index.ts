//1 - tipo de objeto para funçaõ com interface
interface Product {
    name: string,
    price: number,
    isAvailable: true
}

function showProducctDetails(product: Product){
    console.log(`O nome do produto é ${product.name} e seu valor é R$${product.price}`)
    if(product.isAvailable){
        console.log(`O produto está disponivel!`)
    }
}

const shirt: Product = {
    name: "blusa",
    price: 10.50,
    isAvailable: true
}

showProducctDetails(shirt)
showProducctDetails({name: "Tenis", price: 54.53, isAvailable: true})

//2 - propriedes opcionais com interfaces
interface User {
    email: string,
    role?: string
}

function showDetail(user: User){
    console.log(`Email do usuario: ${user.email}`)

    if(user.role){
        console.log(`A função do usuario é: ${user.role}`)
    }
}

const u1: User = {email: "lucas@email.com", role: "top"}
const u2: User = {email: "fm@email.com",}

showDetail(u1)
showDetail(u2)

//3 - readyonly
interface Car{
    brand: string,
    readonly wheels: number
}

const fusca:Car ={ brand: "Wlk", wheels: 4 }

console.log(fusca)
//fusca.wheels = 5 //erro essa propriedade é so para leitura e nao pode ser alterada
fusca.brand = "x"

//4 - index signature
//utilizamos quando nao sabemos os nomes das chaves mas sabemos qual tipo de um objeto ou array
interface CoordObject {  
    //[nome da propriedade]: tipa o valor como number
    [index: string]: number
}

let coords: CoordObject = {x: 10}

coords.y = 15
console.log(coords)

//coords.z = "teste" //erro pois o tipo do valor tem q ser numerico

//5 - extending interface
interface Human{
    name: string
    age: number
}

//herança de interface usando o extends
interface SuperHuman extends Human{
    superPowers: string[]
}

const pessoa1: Human = { name: "Lucas", age: 21 }

console.log(pessoa1)

const goku: SuperHuman = { name: "Goku", age: 50, superPowers: ["genki dama", "teleporte"] }

console.log(goku)
console.log(goku.superPowers[0])

//6 - intersection types
//sao usados para criar tipos mais complexos utilizando duas interfaces
//utilizamos o & para concatenar

interface Character{
    name: string
}

interface Gun{
    type: string,
    caliber: number
}

//criamos um type HumanWithGun
//e unimos chacarcter e gun no tipo HumanWithGun
type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
    name: "Arnold",
    type: "Pistoll",
    caliber: 9
}

console.log(arnold)

//7 - readyonly array
/*  deixa os elementos do array como readonly
    podemos aplicar um tipo para os itens do array
    a modificação de itens pode ocorrer atraves de metodos mas nao podemos aumentar o array
*/

let myArray: ReadonlyArray<string> = ["Banana", "Uva", "Abacaxi"]

//myArray[3] = "Maça" //sem o ReadOnlyArray esse comando iria adicionar "Maça" ao array

console.log(myArray)
//sao permitidas modificações atraves de metodos, porem modificações diretas nao sao
myArray.forEach((item) => {
    console.log(`Fruta: ${item}`)
})

myArray = myArray.map((item) => {
    return `Fruta: ${item}`
})

console.log(myArray)

//8 - tuplas
/*  tupla é um tipo de array porem definimos o tipo e a quantidade de itens
    criamos um novo type e inserimos um array com os tipos necessarios
    cada tipo conta como elemento
*/

type fiveNumber = [number, number, number, number, number]
//pode ter outros tipos de dados misturados

const myNumberArray: fiveNumber = [7, 8, 9, 10, 11]

//const arr2: fiveNumber = [1, 2, 3, 4, 5, 6] 
//erro pois tem 6 elementos e ele foi definido apenas para 5

//const arr3: fiveNumber = [11, "sim", true, false, 44]  
//erro pois todos os dados foram definidos para ser number

type nameAndAge = [string, number]

const anotherUser: nameAndAge = ["Lucas", 21]

console.log(anotherUser[0])
anotherUser[0] = "Lfm"
console.log(anotherUser[0])

//9 - tuplas com readyonly
function showNumbers(numbers: readonly[number, number]){
    //numbers[0] = 20 // erro n pode modificar um readyonly
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers([1, 2])
