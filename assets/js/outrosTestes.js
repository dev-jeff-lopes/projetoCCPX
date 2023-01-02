// function teclasDoTeclado(){
//     document.addEventListener("keydown", evento => {
//         let name = event.key
//         let code = event.code

//         alert(`key precionado: ${name} \n key code: ${code}`)
//     })
   
// }

// teclasDoTeclado()

function addkeyboard(){
    document.addEventListener("keydown", event => {
        let ingresso1 = document.getElementById("quinta")
        let ingresso2 = document.getElementById("sexta")
        let ingresso3 = document.getElementById("sabado")
        let ingresso4 = document.getElementById("domingo")

   

        if(event.code == "Digit1"){
            ingresso1.classList.toggle("card-ingresso")
            ingresso2.classList.remove("card-ingresso")
            ingresso3.classList.remove("card-ingresso")
            ingresso4.classList.remove("card-ingresso")
        }

        if(event.code == "Digit2"){
            ingresso1.classList.remove("card-ingresso")
            ingresso2.classList.toggle("card-ingresso")
            ingresso3.classList.remove("card-ingresso")
            ingresso4.classList.remove("card-ingresso")
        }

        if(event.code == "Digit3"){
            ingresso1.classList.remove("card-ingresso")
            ingresso2.classList.remove("card-ingresso")
            ingresso3.classList.toggle("card-ingresso")
            ingresso4.classList.remove("card-ingresso")
        }

        if(event.code == "Digit4"){
            ingresso1.classList.remove("card-ingresso")
            ingresso2.classList.remove("card-ingresso")
            ingresso3.classList.remove("card-ingresso")
            ingresso4.classList.toggle("card-ingresso")
        }
    })
}

addkeyboard()

function addClasse(x){
  let elemento = document.getElementById(x)
    elemento.classList.toggle("card-ingresso")
}