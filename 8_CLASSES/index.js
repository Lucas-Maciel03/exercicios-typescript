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
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const trator = new Machine("Trator", 1);
class KillerMachine extends Machine {
    constructor(name, id, guns) {
        super(name, id);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 2, 3);
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
//6 - this
//serve para referirmos ao objeto em si, ou seja acessar suas propriedades
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo ${this.model}, que tem ${this.hp} cavalos de potência.`);
    }
}
const wolks = new Truck("Wolks", 120);
wolks.showDetails();
//7 - Getters
/*  Os getters são uma forma de retornar propriedades do objeto,
    porem podemos modificar-las nesse retorno
    ou seja é um método para ler retornos
*/
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    //um get tem que retornar algo
    get fullName() {
        return this.name + " " + this.surname;
    }
}
const lucasMaciel = new Person("Lucas", "Maciel");
console.log(lucasMaciel.fullName);
//8 - setters
/*  Os getter leem propriedades e os setter modificam/atribuem valores as propriedades
    podemos validar antes de inserir uma propriedade
    Os setters funcionam como metodos
*/
class Coords {
    //nesse caso não há constructor
    //as propriedades sao preenchidas a partir dos setters
    set fillx(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso!");
    }
    set filly(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso!");
    }
    get showCoords() {
        return `X: ${this.x} e Y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillx = 15;
myCoords.filly = 0;
myCoords.filly = 11;
console.log(myCoords);
console.log(myCoords.showCoords);
