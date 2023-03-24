// Capturar 2 números e fazer as operações matemáticas de soma, subtração, multiplicação, divisão e resto de divisão.
// Para cada operação, mostre o resultado.

let numberOne = Number(prompt('Digite um número: '))
let numberTwo = Number(prompt('Digite outro número: '))
const sum = numberOne + numberTwo

alert(`A soma dos dois números é: ${sum}`)

numberOne = Number(prompt('Digite um número: '))
numberTwo = Number(prompt('Digite outro número: '))
const sub = numberOne - numberTwo

alert(`A subtração dos dois números é: ${sub}`)

numberOne = Number(prompt('Digite um número: '))
numberTwo = Number(prompt('Digite outro número: '))
const mult = numberOne * numberTwo

alert(`A multiplicação dos dois números é: ${mult}`)

numberOne = Number(prompt('Digite um número: '))
numberTwo = Number(prompt('Digite outro número: '))
const div = numberOne / numberTwo

alert(`A divisão dos dois números é: ${div}`)

numberOne = Number(prompt('Digite um número: '))
numberTwo = Number(prompt('Digite outro número: '))
const rem = numberOne % numberTwo

alert(`O resto da divisão dos dois números é: ${rem}`)

