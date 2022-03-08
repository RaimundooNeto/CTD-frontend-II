const body = document.querySelector('.dark')
const header = document.querySelector('header')
const item = document.querySelectorAll('.item')
const itemText = document.querySelectorAll('p')

function alterarTema() {
  body.classList.toggle('bg-dark')
  header.classList.toggle('title-dark')
  modificarTemaItens()
  modificarTemasTexto()
}

function modificarTemaItens() {
  item.forEach(item => {
    item.classList.toggle('item-dark')
  })
}

function modificarTemasTexto() {
  itemText.forEach(item => {
    item.classList.toggle('text-item-dark')
  })
}