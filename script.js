// Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

// - nome;
// - nota da primeira prova;
// - nota da segunda prova.

// Depois de criada a lista:

// - [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
// - [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

let studentList = []
let stop = 0

function calculateAvarage(number1, number2) {
  const avarage = Number((number1 + number2) / 2).toFixed(2)
  return avarage
}

while (stop != 1) {
  let student = {
    name: String(),
    gradeOne: Number(),
    gradeTwo: Number()
  }

  student.name = prompt('Qual o nome do aluno?')
  student.gradeOne = Number(prompt('Insira a nota do primeiro exame: '))
  student.gradeTwo = Number(prompt('Insira a nota do segundo exame: '))

  studentList.push(student)

  stop = prompt('Digite "1" para parar de cadastrar os estudantes.')
  console.log(stop);

  if (stop == 1) {
    for (student of studentList) {
      alert(`A média do ${student.name} é de ${calculateAvarage(student.gradeOne, student.gradeTwo)}`)
    }
  }
}