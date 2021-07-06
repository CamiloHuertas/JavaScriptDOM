const $cards = document.querySelector(".cards")
console.log($cards)

//Para saber el padre de algun elemento se usa parentElement

console.log($cards.parentElement)

//Para ir a los hijos de algun elemento se usa .children
console.log($cards.children)

//ChildNodes imprime todos los hijos incluyendo saltos de linea
console.log($cards.childNodes)

//Para ir a alguno en especial se usa la notacion de los arreglos con los corchetes, que de igual forma el primer elemento es 0
console.log($cards.children[2])

//Para ir al primer elemento hijo se usa firstElementChild

console.log($cards.firstElementChild)

//Para ir al ultimo elemento hijo se usa LastElementChild

console.log($cards.lastElementChild)

//Para detectar al hermano anterior se usa previous element sibling, (sibling significa hermano)

console.log($cards.previousElementSibling)

//Para detectar al hermano siguiente se usa next element sibling, (sibling significa hermano)

console.log($cards.nextElementSibling)

//closest nos dice cual es elemento mas cercano que nosotros le especifiquemos
console.log($cards.closest("div"))
console.log($cards.closest("body"))
console.log($cards.children[3].closest("section"))

//Pruebas mias
// const $card = document.querySelectorAll(".cards figure")
// console.log($card)

// console.log($card[2])

// const $cards = document.querySelector(".cards")
// console.log($cards)

// console.log($cards.children[2])
