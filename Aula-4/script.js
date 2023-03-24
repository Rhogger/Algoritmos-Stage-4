// Solicite o nome do aluno e as 3 notas do bimestre para calcular a sua média.
// Se o aluno passar no bimestre, dê os parabéns.
// Senão, motive-o para que ele dê o seu melhor na próxima chance.
// Em ambos os casos, mostre o nome do aluno e a nota

let nome = prompt('Digite seu nome: ')

const nota1 = Number(prompt('Digite sua nota 1: '))
const nota2 = Number(prompt('Digite sua nota 2: '))
const nota3 = Number(prompt('Digite sua nota 3: '))

let media = ((nota1 + nota2 + nota3) / 3).toFixed(2)

if (media > 6) {
  alert(`O aluno ${nome} tirou nota ${media} e passou, parabéns!`)
} else {
  alert(`O aluno ${nome} tirou nota ${media} e reprovou, parabéns pela decepção!`)
}