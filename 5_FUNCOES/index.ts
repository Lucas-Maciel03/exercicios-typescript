//1 - função sem retorno (void)
function withoutReturn():void{
    console.log('Essa função não tem retorno!')
    //return 2
}

withoutReturn()

//2 - callback como argumento
function greeting(name: string): string{
    return `Olá, ${name}`
}

//f: (name: string) - é a callback
//=> string - é o tipo de retorno da função
function preGreeting(f: (name: string) => string, userName: string){
    console.log('Preparando chamada!')

    const greet = f(userName)

    console.log(greet)
}

preGreeting(greeting, "Lucas")
preGreeting(greeting, "cas")
preGreeting(greeting, "dds")

//3 - generic function
//a sintaxe <T> simboliza generic
//esta dizendo que o arr é do tipo T ou seja Generico(ele não sabe q tipo de dao vai vir)
//o simbolo que define generico é <> as letras dentro são so pra representar....
function firstElement<T>(arr: T[]): T{
    return arr[0]
}

console.log(firstElement([4, 5, 8, 10]))
console.log(firstElement(["f", "h", "b", "z"]))
//console.log(firstElement("teste")) erro pois está esperando um array

function mergeObjects<U, T>(obj1: U, obj2: T){
    return {
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObjects({name: "Matheus"}, {age: 33, job: "DEV"})

console.log(newObject)

//4 - constraints nas generics functions
//<T extends> significa que esse generic so ira aceitar tipos number ou string 
function biggestNumber<T extends number | string>(a: T, b: T): T{
    let biggest: T

    if(+a > +b){
        biggest = a
    } else {
        biggest = b
    }

    return biggest
}

console.log(biggestNumber(3, 5))
console.log(biggestNumber("8", "1"))
//erro pois so usamos 1 generic entao os dois tipos tem q ser igual
//console.log(biggestNumber("8", 1)) 
//console.log(biggestNumber(3, true)) erro