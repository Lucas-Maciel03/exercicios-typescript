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