// Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

// - [ ]  A soma dos dois números;
// - [ ]  A subtração dos dois números;
// - [ ]  A multiplicação dos dois números;
// - [ ]  A divisão dos dois números;
// - [ ]  O resto da divisão dos dois números;
// - [ ]  Verifique se a soma dos dois números é par;
// - [ ]  Verifique se os dois números inseridos são iguais.

let numberOne = Number(prompt('Digite um número'))
let numberTwo = Number(prompt('Digite o outro número'))

if (numberOne === numberTwo) {
  alert('Os dois números são iguais.')
} else {
  alert('Os dois números são diferentes')
}

let result = numberOne + numberTwo

if (result % 2 === 0) {
  alert(`A soma dos dois números é ${result} e é par.`)
} else {
  alert(`A soma dos dois números é ${result} e é ímpar.`)
}

result = numberOne - numberTwo
alert(`A subtração dos dois números é ${result}`)

result = numberOne * numberTwo
alert(`A multiplicação dos dois números é ${result}`)

result = numberOne / numberTwo
alert(`A divisão dos dois números é ${result}`)

result = numberOne % numberTwo
alert(`O resto da divisão dos dois números é ${result}`)