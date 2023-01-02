const dia = document.getElementById("dia")
const hora = document.getElementById("hora")
const minuto = document.getElementById("minuto")
const segundo = document.getElementById("segundo")
const tempoEscopo  = "10 jan 2023"


function countDown(){
    const escopo = new Date(tempoEscopo)
    const hoje = new Date()
    const segundoTotal = (escopo - hoje) / 1000

    const tdia = Math.floor(segundoTotal / 60 / 60 / 24)
    const thora = Math.floor(segundoTotal / 60 / 60 % 24)
    const tminuto = Math.floor(segundoTotal / 60 % 60)
    const tsegundo = Math.floor(segundoTotal % 60)

    dia.innerHTML = textFormat(tdia)
    hora.innerHTML = textFormat(thora)
    minuto.innerHTML = textFormat(tminuto)
    segundo.innerHTML = textFormat(tsegundo)
      
}

function textFormat(tempo){
    return tempo < 10? `0${tempo}` : tempo 
}

countDown()
setInterval(countDown, 1000)