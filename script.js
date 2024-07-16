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

