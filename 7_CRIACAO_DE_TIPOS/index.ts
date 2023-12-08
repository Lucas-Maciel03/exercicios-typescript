//1 - Generics
/* O proposito do generic é transformar o que é passado
   em um argumento valido para a função respeitando as regras dela*/
function showData<T>(arg: T):string{
    return `O dado é: ${arg}`
}

console.log(showData(5))
console.log(showData("nome do usuário"))
console.log(showData(true))
console.log(showData([]))
console.log(showData(["true", "xx", 5]))