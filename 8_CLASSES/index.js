"use strict";
//1 - campos em classe
//um campo sem valor inicial deve ser inicializado com !
class User {
}
const lucas = new User();
lucas.name = "Lucas";
console.log(lucas);
//2 - constructor
class NewUser {
    //os tipos vao vir por inferencia e os valores pelo constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
//inicializando com constructor new
const joao = new NewUser("João", 25);
console.log(joao);
//3 - readyonly
//tornando um valor somente para consulta
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("Fusca");
//fusca.wheels = 3 //erro n pode mudar valor de uma propriedade readyonly
console.log(fusca);
fusca.name = "Fusca Azul";
console.log(fusca);
//4 - herança e super
/*  para gerar uma heranca usamos o comando extends
    vamos precisar passar as propriedades da classe pai para ela
    isso será feito com a função super
*/
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 4);
console.log(trator);
console.log(destroyer);
//5 - metodos
//metodos sao como funçoes das classes
//podemos criar junto com as classes e os objetos podem utilizar-los
//é uma maneira de adicionar funcionalidade as classes
class Duende {
    constructor(name) {
        this.name = name;
    }
    //metodo greeting
    greeting() {
        console.log("Olá, Humano!");
    }
}
const bilbo = new Duende("Bilbo");
console.log(bilbo.name);
bilbo.greeting();
console.log(bilbo);
