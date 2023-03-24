let numberOne = Number(prompt('Digite um número'))
let numberTwo = Number(prompt('Digite o outro número'))
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