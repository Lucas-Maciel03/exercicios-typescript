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
const joao = new NewUser("Lucas", 21);
