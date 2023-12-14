//1 - campos em classe
//um campo sem valor inicial deve ser inicializado com !
class User {
    name!: string
    age!: number
}

const lucas = new User()
lucas.name = "Lucas"

console.log(lucas)

//2 - constructor
class NewUser {
    name
    age

    //os tipos vao vir por inferencia e os valores pelo constructor
    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
    /* como os tipos vao vir por inferencia?
        usando o comando this que se refere ao proprio objeto,
        ou seja this.name se refere ao objeto e (= name) se refere ao valor recebido
    */
}
//inicializando com constructor new
const joao = new NewUser("João", 25)
console.log(joao)

//3 - readyonly
//tornando um valor somente para consulta
class Car{
    name
    readonly wheels = 4

    constructor(name: string){
        this.name = name
    }
}

const fusca = new Car("Fusca")
//fusca.wheels = 3 //erro n pode mudar valor de uma propriedade readyonly

console.log(fusca)
fusca.name = "Fusca Azul"
console.log(fusca)

//4 - herança e super
/*  para gerar uma heranca usamos o comando extends
    vamos precisar passar as propriedades da classe pai para ela
    isso será feito com a função super
*/

class Machine {
    name
    id

    constructor(name: string, id: number){
        this.name = name
        this.id = id
    }
}

const trator = new Machine("Trator", 1)

class KillerMachine extends Machine {
    guns

    constructor(name: string, id:number, guns: number){
        super(name, id)
        this.guns = guns
    }
}

const destroyer = new KillerMachine("Destroyer", 4)

console.log(trator)
console.log(destroyer)

//5 - metodos
//metodos sao como funçoes das classes
//podemos criar junto com as classes e os objetos podem utilizar-los
//é uma maneira de adicionar funcionalidade as classes
class Duende {
    name

    constructor(name: string){
        this.name = name
    }

    //metodo greeting
    greeting(){
        console.log("Olá, Humano!")
    }
}

const bilbo = new Duende("Bilbo")

console.log(bilbo.name)
bilbo.greeting()
console.log(bilbo)

//6 - this
//serve para referirmos ao objeto em si, ou seja acessar suas propriedades

class Truck {
    model
    hp

    constructor(model: string, hp: number){
        this.model = model
        this.hp = hp
    }

    showDetails(){
        console.log(`Caminhão do modelo ${this.model}, que tem ${this.hp} cavalos de potência.`)
    }
}

const wolks = new Truck("Wolks", 120)

wolks.showDetails()