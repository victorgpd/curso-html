const ultimoAcesso = new Date("2024/09/25 16:00:00")
const dataAtual = new Date()

const acessoTime = ultimoAcesso.getTime()
const timeAtual = dataAtual.getTime()

const diferença = timeAtual - acessoTime

const miliSecondHour = 1000*60*60
const miliSecondDay = miliSecondHour * 24

let msg = ""

if (diferença > miliSecondDay) {
    msg = "Você está ausente a dias!"
} else if (diferença > miliSecondHour) {
    msg = "Você está ausente a horas!"
} else {
    msg = "Você está logado"
}

console.log(msg)