//Desde JS se pueden crear eqituquetas HTML
//Un elemento para JS es una etiqueta para HTML

//Para crear la etiqueta se usa el metodo createElement, que como es un metodo recibe un valor entre comillas en el cual va cual etiqueta queremos crear

//Aqui ya las creamos pero no se han integrado en el arbol del DOM
const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  //Para crear nodos de texto se utiliza createTextNode
  $figcaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards")

//Hay que tener mucho cuidado a la hora de crear elementos ya que su orden influye con respecto al orden que le demos en el codigo
$img.setAttribute("src", "https://placeimg.com/200/200/animals")
$img.setAttribute("alt", "Animals")

$figure.classList.add("card")

//Append Child le dice al codigo que añada un hijo al elemento que le digamos con el metodo appendChild
$figcaption.appendChild($figcaptionText)
$figure.appendChild($img)
$figure.appendChild($figcaption)
$cards.appendChild($figure)

//Esta es una manera de crear otro elemento pero de una manera mas dinamica, hay que decir que esta manera no es la mejor y como mandamos todo en forma de texto no lo toma como un nodo pero igual existe esta manera
const $figure2 = document.createElement("figure")

$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People"> <figcaption>People</figcaption>
`

$figure2.classList.add("card")
$cards.appendChild($figure2)

// Pero estas son las maneras de hacer elementos individualmente, pero y si queremos hacer varias a la vez

const estaciones = ["primavera", "Verano", "Otono", "Invierno"],
  $ul = document.createElement("ul")

document.write("<h3>Estaciones del Año</h3>")
document.body.appendChild($ul)

//En este codigo se crean varios elementos a la vez
estaciones.forEach((el) => {
  const $li = document.createElement("li")
  $li.textContent = el
  $ul.appendChild($li)
})

//Otra forma

const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"]
$ul2 = document.createElement("ul")

document.write("<h3>Continentes Del Mundo</h3>")
document.body.appendChild($ul2)
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`))

// Fragmentos

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  $ul3 = document.createElement("ul"),
  //Con esta linea se crea un fragmento
  $fragment = document.createDocumentFragment()

//Cuando son fragmentos del DOM no se puede utilizar el innerHTML
meses.forEach((el) => {
  const $li = document.createElement("li")
  $li.textContent = el
  $fragment.appendChild($li)
})

document.write("<h3>Meses del año</h3>")
$ul3.appendChild($fragment)
document.body.appendChild($ul3)
