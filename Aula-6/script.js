// Faça um jogo da adivinhação

// Apresente a mensagem ao usuário: 'Adivinhe o número que estou pensando? Entre 0 e 10.'

// Crie uma lógica para gerar um número aleatório e verificar se o número digitado é o mesmo que o o aleatório gerado pelo sistema.

// Enquanto o usuário não adivinhar o número, mostre a mensagem: 'Erro, tente novamente.'

// Caso o usuário acertar o número, apresentar a mensagem: 'Parabéns! Você adivinhou o número em x tentativas'

// Substitua o 'x' pela número de tentativas.

function getNumAleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

let num = getNumAleatorio(1, 11)
let chute
let tentativas = 0


while (chute !== num) {
  chute = Number(prompt('Adivinhe o número que estou pensando? Entre 0 e 10.'))
  tentativas++
}

alert(`Parabéns! Você adivinhou o número em ${tentativas} tentativas!`)