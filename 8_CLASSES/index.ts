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

const destroyer = new KillerMachine("Destroyer", 2, 3)

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

//7 - Getters
/*  Os getters são uma forma de retornar propriedades do objeto,
    porem podemos modificar-las nesse retorno
    ou seja é um método para ler retornos
*/
class Person {
    name
    surname

    constructor(name: string, surname: string){
        this.name = name
        this.surname = surname
    }

    //um get tem que retornar algo
    get fullName(){
        return this.name + " " + this.surname
    } 
}

const lucasMaciel = new Person("Lucas", "Maciel")

console.log(lucasMaciel.fullName)

//8 - setters
/*  Os getter leem propriedades e os setter modificam/atribuem valores as propriedades
    podemos validar antes de inserir uma propriedade
    Os setters funcionam como metodos
*/

class Coords {
    x!: number 
    y!:number

    //nesse caso não há constructor
    //as propriedades sao preenchidas a partir dos setters
    set fillx(x: number){
        if(x === 0){
            return
        }

        this.x = x

        console.log("X inserido com sucesso!")
    }

    set filly(y: number){
        if(y === 0){
            return
        }

        this.y = y

        console.log("Y inserido com sucesso!")
    }

    get showCoords(){
        return `X: ${this.x} e Y: ${this.y}`
    }
}

const myCoords = new Coords()

myCoords.fillx = 15
myCoords.filly = 0
myCoords.filly = 11

console.log(myCoords)
console.log(myCoords.showCoords)

//9 - herança de interface (implements)
/*  podemos herdar as interfaces com o comando implements, a ideia é parecida com extends
    porem essa forma é usada para criar metodos que varias classem terão em comum
*/

interface showTitle{
    itemTitle(): string
    //na interface eu so informo que vai ter um metodo, não sendo preciso desenvolver ele aqui
    //o desenvolvimento pode ser feito na classe que ira implementar a interface
    //metodo que recebe propriedade e retorna uma string
}

class Blogpost implements showTitle{
    title

    constructor(title: string){
        this.title = title
    }

    itemTitle(): string {
        return `Titulo do post ${this.title}`
    }
}

const postagem = new Blogpost("SPFC")

console.log(postagem.itemTitle())

class NewsPost implements showTitle{
    title

    constructor(title: string){
        this.title = title
    }

    itemTitle(): string {
        return `Noticia: ${this.title}`
    }
}

const noticia = new NewsPost("Campeão Copa do brasil!")

console.log(noticia.itemTitle())