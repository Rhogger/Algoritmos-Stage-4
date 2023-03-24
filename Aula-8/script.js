/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

let listaPacientes = []
let opcao = 0

while (opcao !== 4) {
  opcao = Number(prompt(`
  Olá! Digite o número da opção desejada:
  
  1. Cadastrar um paciente na lista
  2. Mostrar a lista de cadastrados
  3. Mostrar a lista com os nomes desses pacientes
  4. Sair do programa`
  ))

  switch (opcao) {
    case 1:
      let paciente = {
        nome: String(),
        idade: Number(),
        peso: Number(),
        altura: Number()
      }

      paciente.nome = prompt('Digite o nome do paciente: ')
      paciente.idade = prompt('Digite sua idade: ')
      paciente.peso = prompt('Digite seu peso: ')
      paciente.altura = prompt('Digite sua altura: ')

      listaPacientes.push(paciente)

      console.log(listaPacientes);
      break;

    case 2:
      if (listaPacientes.length == 0) {
        alert('Não existem pacientes cadastrados!')
      } else {
        alert('Os pacientes cadastrados são esses: ')
        const lista = listaPacientes.map((paciente) => {
          alert(`
            Nome: ${paciente.nome}
            Idade: ${paciente.idade}
            Peso: ${paciente.peso}
            Altura: ${paciente.altura}
            `)
        })
      }
      break;

    case 3:
      if (listaPacientes.length == 0) {
        alert('Não há nomes nessa lista!')
      } else {
        const listaNomes = listaPacientes.map(paciente => paciente.nome)
        alert(`Os nomes são: ${listaNomes}`)
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