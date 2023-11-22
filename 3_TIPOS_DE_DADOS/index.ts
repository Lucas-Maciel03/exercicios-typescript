// 1 - arrays[]
let numbers: number[] = [1, 5, 6, 8]
numbers.push(3)

console.log(numbers[2])

const nomes: string[] = ["Maria", "Joao", "André"]

nomes.push("Ale")
console.log(nomes)

//outra sintaxe Array (menos utilizada)
const nums: Array<number> = [1, 3, 4]

nums.push(9)
console.log(nums)

//2 - any
//com o any a tipagem fica fraca e pode não ser interessante
const arr1: any = [3, 'ola', false, []]

arr1.push([5, 6, 7])

console.log(arr1)

//3 - parametros tipados

function soma(a: number, b: number){
    console.log(a + b)
}

soma(3, 1)
// soma(3, '1')

//4 - retorno de função
function greeting(name: string): string{
    return `Olá, ${name}`
}

console.log(greeting("Lucas"))

//5 - funções anonimas
//o TS ajuda fazendo validações do codigo digitado, dando dicas de possiveis erros
setTimeout(function(){
    const salary: number = 1000
    //console.log(parseFloat(salary))
    //console.log(salary)
}, 2000)

//6 - tipos de Objetos
function passCoordinates(coord: {x: number, y: number}){
    console.log("X coordinates: " + coord.x)
    console.log("Y coordinates: " + coord.y)
}

const objCoord = {x: 3.244, y: 84.2}
passCoordinates(objCoord)
//passCoordinates({x: 322, y: 345}) erro