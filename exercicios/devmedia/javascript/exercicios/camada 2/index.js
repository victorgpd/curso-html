const feriadosNacionais = [
    { nome: 'Confraternização Universal', data: '01/01' },
    { nome: 'Tiradentes', data: '04/21' },
    { nome: 'Dia do Trabalhador', data: '05/01' },
    { nome: 'Independência do Brasil', data: '09/07' },
    { nome: 'Nossa Senhora Aparecida', data: '10/12' },
    { nome: 'Finados', data: '11/02' },
    { nome: 'Proclamação da República', data: '11/15' },
    { nome: 'Natal', data: '12/25' },
]

console.log("\nOs próximos feriados serão: \n")

let numeroFeriados = 3

const data = new Date()
const dataHoje = data.toLocaleDateString()

console.log(dataHoje)