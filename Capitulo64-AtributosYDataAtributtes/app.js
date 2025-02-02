//getAttribute recibe el valor del atributo, setAttribute establece el nuevo valor del atributo

console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute("lang"))

//Siempre utilizar getAttribute ya que es la forma correcta
console.log(document.querySelector(".link-dom").href)
console.log(document.querySelector(".link-dom").getAttribute("href"))

//Asi se pueden cambiar los valores de los atributos con el punto
document.documentElement.lang = "en"

//Asi se pueden cambiar los valores de los atributos con setAttribute, se pone primero el atributo a cambiar y despues el valor por el que lo queremos remplazar
document.documentElement.setAttribute("lang", "es-MX")
console.log(document.documentElement.lang)

//Para facilitarnos la vida se pudee guardar todo en variables, puede ser o en const o en let

//Es una buena practica poner un signo de dolar antes del nombre de la variable en caso que se guarde algo referente al dom
const $linkDom = document.querySelector(".link-dom")

$linkDom.setAttribute("target", "_blank")
$linkDom.setAttribute("rel", "noopener")
$linkDom.setAttribute("href", "https://youtube.com/jonmircha")

//Has valida si cierta propiedad tiene ese atributos
console.log($linkDom.hasAttribute("rel"))
//Tambiene esta removeAttribute que lo que hace es quitar un atributo, esto no se tiene que poner en console.log
$linkDom.removeAttribute("rel")

console.log($linkDom.hasAttribute("rel"))

//Data-Attributes
//Para crear data attributes lo unico importante es que en el html este escrito data- y despues del guion el nombre del data attribute

console.log($linkDom.getAttribute("data-description"))
console.log($linkDom.dataset)

$linkDom.setAttribute("data-description", "Modelo de objeto del documento")

//Esto imprime el DOMStringMap que es como un objeto que va recolectando todos los data attributes de la etiqueta
console.log($linkDom.dataset)
console.log($linkDom.dataset.description)
