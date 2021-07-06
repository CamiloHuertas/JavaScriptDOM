//Las propiedades CSS en JS no se escribem con el guion medio ya que esto significa resta, en JS se usa camel case para declarar propiedades css

//Utilizar directamente el punto es mas general, usar el getaAttribute es mas especifico, y todo dentro del getAttribute debe estar entre comillas

const $linkDom = document.querySelector(".link-dom")

//Asi se accede a todas las propiedades generales

//Con el punto salen todas las disponibles para el elemento
console.log($linkDom.style)

//Con getAttribute solo salen las que tu le has puesto al elemento
console.log($linkDom.getAttribute("style"))

// Acceder a propiedades especificas

// Con la notacion del punto es muy facil, solo hay que poner un punto y el nombre de la propiedad a la que queremos acceder en camel case

console.log($linkDom.style.backgroundColor)
console.log($linkDom.style.color)

//Con la notacion del GetAttribute no se :/

//Otra manera de que salgan las propiedades de todo el elemento pero esta vez tienen su valor por defecto, la diferencia entre $linkDom.style y window.GetComputedStyle($linkDom), es que en .style las propiedades no salen con su valor, encambio en las otras si salen todas llenas con su valor por defecto
// No es necesario poner el window

console.log(window.getComputedStyle($linkDom))
console.log(getComputedStyle($linkDom))

//Para obtener un valor en especifico con getComputedStyle,

console.log(window.getComputedStyle($linkDom).getPropertyValue("color"))
console.log(getComputedStyle($linkDom).getPropertyValue("color"))

//Con setProperty podemos establecer propiedades desde JS, solo hay que poner el nombre de la variable seguido de .style.setProperty y el primer valor entre comillas es la propiedad a establecer y el segundo valor seguido de una coma es el valor que le queremos poner a la propiedad que establecimos antes

//Aqui si se puede poner con el guion medio ya que esta siendo declarado en forma de cadena de texto

//Forma con el setProperty
$linkDom.style.setProperty("text-decoration", "none")
$linkDom.style.setProperty("display", "block")

//Forma con la notacion del punto
$linkDom.style.width = "50%"
$linkDom.style.textAlign = "center"
$linkDom.style.margin = "auto"
$linkDom.style.padding = "1rem"
$linkDom.style.borderRadius = ".5rem"

console.log(getComputedStyle($linkDom))

//Variables CSS - Custom Properties CSS
//Aqui se selecciona al html completo y al body
const $html = document.documentElement,
  $body = document.body

//Aqui se agarran y almacenan en let los colores que estan en el root del html
let varDarkColor = getComputedStyle($html).getPropertyValue("--Dark-Color"),
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")

console.log(varDarkColor, varYellowColor)

//Aqui se aplican las variables al body
$body.style.backgroundColor = varDarkColor
$body.style.color = varYellowColor

//Aqui se modifica un valor del root, pero para que funcione hay que actualizar la variable
$html.style.setProperty("--Dark-Color", "pink")

varDarkColor = getComputedStyle($html).getPropertyValue("--Dark-Color")

$body.style.setProperty("background-color", varDarkColor)
