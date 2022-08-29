import { clientes } from "./data.js"

const galeriaEl = document.querySelector(".galeria__container")

const criaImgDaLista = (src) => {
  const li = document.createElement('li')
  const img = document.createElement('img')
  img.classList.add('galeria__imagem')
  img.setAttribute('src', src)
  li.appendChild(img)
  return li
}

const criaH3El = (texto) => {
  const h3 = document.createElement('h3')
  h3.classList.add('galeria__conteudo--titulo')
  h3.innerHTML = texto
  return h3
}

const criaSpanEl = (texto) => {
  const span = document.createElement('span')
  span.classList.add('galeria__conteudo--descricao')
  span.innerHTML = texto
  return span
}

const criaDescricaoEl = (texto, dado) => {
  const li = document.createElement('li')
  li.appendChild(criaH3El(texto))
  li.appendChild(criaSpanEl(dado))
  return li
}

const criaListasEl = () => {
  const ulsElement = []
  clientes.map((cliente) => {
    const ul = document.createElement('ul')
    ul.classList.add('galeria__conteudo')
    ul.appendChild(criaImgDaLista(cliente.foto))
    ul.appendChild(criaDescricaoEl('Nome do Pet: ', cliente.pet))
    ul.appendChild(criaDescricaoEl('Animal: ', cliente.animal))
    ul.appendChild(criaDescricaoEl('Dono(a): ', cliente.nome))
    ul.appendChild(criaDescricaoEl('Idade: ', cliente.idade))
    ul.appendChild(criaDescricaoEl('Raça: ', cliente.raca))
    galeriaEl.appendChild(ul)
  }
  )
}

criaListasEl()






