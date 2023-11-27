function review(note: number | boolean){
    if(note){
       if(note === 1){
            console.log(`Avaliação nota ${note}`)
       } else if(note === 2){
            console.log(`Avaliação nota ${note}`)
       } else if(note === 3){
            console.log(`Avaliação nota ${note}`)
       } else if(note === 4){
            console.log(`Avaliação nota ${note}`)
       } else if(note === 5){
            console.log(`Avaliação nota ${note}`)
       } else {
            console.log("Informe uma avaliação entre as notas 1 e 5")
       }
    } else{
        console.log("Informe uma avaliação valida!")
    }
}
review(false)
review(8)
review(-25)
review(1)
review(2)
review(3)
review(4)
review(5)
