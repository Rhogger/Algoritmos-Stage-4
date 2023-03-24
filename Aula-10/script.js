/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC

  peso / (altura * altura) */



let listaPacientes = []
let opcao = 0

function calculaIMC(peso, altura) {
  const imc = (peso / ((altura / 100) ** 2)).toFixed(2)
  return Number(imc)
}

while (opcao !== 4) {
  opcao = Number(prompt(`
  Olá! Digite o número da opção desejada:
  
  1. Cadastrar um paciente na lista
  2. Mostrar a lista de cadastrados
  3. Mostrar o IMC de todos os pacientes
  4. Sair do programa`
  ))

  switch (opcao) {
    case 1:
      let pacientes = {
        nome: String(),
        idade: Number(),
        peso: Number(),
        altura: Number()
      }

      pacientes.nome = prompt('Digite o nome do paciente: ')
      pacientes.idade = prompt('Digite sua idade: ')
      pacientes.peso = prompt('Digite seu peso: ')
      pacientes.altura = prompt('Digite sua altura: ')

      listaPacientes.push(pacientes)

      console.log(listaPacientes);
      break;

    case 2:
      if (listaPacientes.length == 0) {
        alert('Não existem pacientes cadastrados!')
      } else {
        alert('Os pacientes cadastrados são esses: ')
        listaPacientes.map((pacientes) => {
          alert(`
            Nome: ${pacientes.nome}
            Idade: ${pacientes.idade}
            Peso: ${pacientes.peso}
            Altura: ${pacientes.altura}
            `)
        })
      }
      break;

    case 3:
      if (listaPacientes.length == 0) {
        alert('Não há pacientes cadastrados!')
      } else {
        listaPacientes.map((pacientes) => {
          alert(`
            Paciente ${pacientes.nome} possui o IMC de: ${calculaIMC(pacientes.peso, pacientes.altura)}
              `)
        })
      }
      break;

    case 4:
      alert('Que triste, você está nos deixando :(')
      break;

    default:
      alert('Essa opção não existe!')
      break;
  }
}