const $card = document.querySelector(".card")

console.log($card)

//Class name devuelve en forma de cadena de texto el valor que tiene dentro de la propiedad class
console.log($card.className)

//Muestra el nombre de las clases que tiene el elemento pero no en forma de cadena de texto
console.log($card.classList)

//Classlist tiene un metodo para saber si tiene o no cierta clase que indiquemos, la cual es contains, devuelve un valor boolean
console.log($card.classList.contains("rotate-45"))

//Como agregar clases - se usa el nombre de variable.classList.add("nombre de variable css que queramos anadir)

$card.classList.add("rotate-45")
console.log($card.classList.contains("rotate-45"))

//Si tenemos metodo add, tambien tenemos metodo remove
$card.classList.remove("rotate-45")
console.log($card.classList.contains("rotate-45"))

//Hay otro metodo que es mas eficiente y mas compacto, que es toggle, lo que hace es que si no la tiene se la pone, y si ya la tiene se la quita

$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"))
$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"))
$card.classList.toggle("rotate-45")

//Tambien se pueden reemplazar las clases, este metodo tiene 2 valores, el primero es la clase que queremos reemplazar, y el segundo es por cual clase la queremos reemplazar

$card.classList.replace("rotate-45", "rotate-135")

//Si queremos agregar o quitar varias clases al mismo tiempo se puede hacer, solo poniendo entre comillas y separadas por comas el nombre de las clases
$card.classList.add("opacity-80", "sepia")
