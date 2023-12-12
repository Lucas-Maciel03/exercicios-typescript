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
