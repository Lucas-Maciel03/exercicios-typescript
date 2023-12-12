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
