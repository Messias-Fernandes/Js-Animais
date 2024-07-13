// eventos 
const imgs = document.querySelectorAll('img')

function handleImg (event) {
  console.log(event.target )
}

imgs.forEach((img) => {
  img.addEventListener('click', handleImg)
})

const linksInternos = document.querySelectorAll('a[href^="#"]')

function handleLink(event) {
  event.preventDefault();
  event.currentTarget.classList.add('ativo')
  linksInternos.forEach((link) => {
    link.classList.remove('ativo')
  });
  event.currentTarget.classList.add('ativo')
}

linksInternos.forEach((link) => {
  link.addEventListener('click', handleLink)
})

function handleElement(event){
  event.currentTarget.remove()
}

const todos = document.querySelectorAll('body *')
todos.forEach((elemento) => {
  elemento.addEventListener('click', handleElement)
})


function handleClickT(event){
  console.log(event.key)
  if(event.key === 't'){
    console.log('clicou t')
  }
}

window.addEventListener('keydown', handleClickT)

// eventos 
const imgs = document.querySelectorAll('img')

function handleImg (event) {
  console.log(event.target )
}

imgs.forEach((img) => {
  img.addEventListener('click', handleImg)
})

const linksInternos = document.querySelectorAll('a[href^="#"]')

function handleLink(event) {
  event.preventDefault();
  event.currentTarget.classList.add('ativo')
  linksInternos.forEach((link) => {
    link.classList.remove('ativo')
  });
  event.currentTarget.classList.add('ativo')
}

linksInternos.forEach((link) => {
  link.addEventListener('click', handleLink)
})

function handleElement(event){
  event.currentTarget.remove()
}

const todos = document.querySelectorAll('body *')
todos.forEach((elemento) => {
  elemento.addEventListener('click', handleElement)
})


function handleClickT(event){
  console.log(event.key)
  if(event.key === 't'){
    console.log('clicou t')
  }
}

window.addEventListener('keydown', handleClickT)