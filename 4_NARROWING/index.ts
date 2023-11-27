//1 - type guard
function sum(a: number | string, b: number | string){
    if(typeof a === "string" && typeof b === "string"){
        console.log(parseFloat(a) + parseFloat(b))
    } else if(typeof a === "number" && typeof b === "number"){
        console.log(a + b)
    } else {
        console.log("impossivel realizar essa soma!")
    }
}

sum("35", "21")
sum(10, 3)
sum(10, "15")

// 2 - checando se valor existe
function operations(arr: number[], operation?: string | undefined){
    if(operation){ // narrow (checar o valor)
        if(operation === "sum"){
            const sum = arr.reduce((i, total) => i + total)
            console.log(sum)
        } else if(operation === "mult"){
            const mult = arr.reduce((i, total) => i * total)
            console.log(mult)
        }
    } else {
        console.log("defina uma operação")
    }
}

operations([1, 2, 3])
operations([1, 2, 3], "sum")
operations([1, 2, 4], "mult")