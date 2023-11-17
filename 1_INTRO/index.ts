const firstName = "Lucas"
const anotherName = 1
const x = true

function greeting(name: string){
    console.log("Olá " + name)
}

greeting(firstName)
//nao iria ser possivel compilar o arquivo pois eles nao sao string
//greeting(anotherName)
//greeting(x)