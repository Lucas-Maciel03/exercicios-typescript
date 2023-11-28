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