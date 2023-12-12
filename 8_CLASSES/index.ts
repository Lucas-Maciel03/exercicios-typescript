//1 - campos em classe
//um campo sem valor inicial deve ser inicializado com !
class User {
    name!: string
    age!: number
}

const lucas = new User()
lucas.name = "Lucas"

console.log(lucas)