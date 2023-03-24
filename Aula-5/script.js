// Capture 10 itens para compor a lista de um supermercado.
// Após capturar os 10 itens, imprima-os e separe por vírgula.
let lista = []

for (let i = 0; i < 10; i++) {
  let item = prompt('Escreva o item que quer adicionar a lista do mercado: ')

  lista.push(item)
}

alert(lista)