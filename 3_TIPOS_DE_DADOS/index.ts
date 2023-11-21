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