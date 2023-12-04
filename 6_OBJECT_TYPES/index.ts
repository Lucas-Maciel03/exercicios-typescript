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

