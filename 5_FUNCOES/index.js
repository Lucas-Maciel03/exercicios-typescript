"use strict";
//1 - função sem retorno (void)
function withoutReturn() {
    console.log('Essa função não tem retorno!');
    //return 2
}
withoutReturn();
//2 - callback como argumento
function greeting(name) {
    return `Olá, ${name}`;
}
//f: (name: string) - é a callback
//=> string - é o tipo de retorno da função
function preGreeting(f, userName) {
    console.log('Preparando chamada!');
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Lucas");
preGreeting(greeting, "cas");
preGreeting(greeting, "dds");
