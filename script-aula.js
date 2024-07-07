const animais = document.getElementById('animais');
console.log(animais)

const gridSection = document.getElementsByClassName('grid-section')
console.log(gridSection[1])

const primeiraLi = document.querySelector('li');
console.log(primeiraLi)

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl)

const linksInternos = document.querySelector('[href^="#"]')
console.log(linksInternos.href)

const animaisImg = document.querySelectorAll('.animais img')
console.log(animaisImg)

const gridSectionHTML = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')



primeiraUl.classList.add('grid-section')

gridSectionNode.forEach(function(item, index){
  console.log(item)
})

const arrayGrid = Array.from(gridSectionHTML)
console.log(arrayGrid)

const imagens = document.querySelectorAll('img')
console.log(imagens)

const img2 = document.querySelectorAll('img[src^="./img/imagem"]')
console.log(img2)

const linksInterno = document.querySelectorAll('[href^="#"]')
console.log(linksInterno)

const h2Animais = document.querySelector('.animais-descricao h2')
console.log(h2Animais)

const direitos = document.querySelector('footer p')
console.log(direitos)

// seleção de elementos

// arrow function 
const paragrafos = document.querySelectorAll('p')
console.log(paragrafos)

paragrafos.forEach((item) => {
  console.log(item);
})

paragrafos.forEach((item) => {
  console.log(item.innerText);
})

const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) =>{
  console.log(item, index)
})

let i = 0 
imgs.forEach(() =>{
  console.log(i++)
})

imgs.forEach(() => i++)

// classes e atributos
const itensMenu = document.querySelectorAll('.menu a')
itensMenu.forEach((item) =>{
  item.classList.add('ativo')
})

itensMenu.forEach((item) =>{
  item.classList.remove('ativo')
})

itensMenu[0].classList.add('ativo')

const img =document.querySelectorAll('img')

img.forEach((img) =>{
  img.hasAttribute('alt')
})

const link = document.querySelector('a[href^="https"]')
link.setAttribute('href', 'https://www.google.com')
console.log(link)

// distancias 

const listaAnimais = document.querySelector('.animais-lista')

const height = listaAnimais.scrollHeight
console.log(height)

//const img = document.querySelector('img')
const imgTop = img.offsetTop;

console.log(imgTop)

//const imgs = document.querySelectorAll('img')

imgs.forEach((imagem) => {
  console.log(imagem.w)
})
console.log()