// Un nodo de texto es el texto que tiene dentro una etiqueta
// Un nodo de etiqueta es una etiqueta html particular
//GetElementById todavia se usa ya que es mas rapido, esto debido a que en querySelector tiene que hacer la validacion si es una clase o un id

// Este lo que hace es traer todas los elementos con la misma etiqueta
console.log(document.getElementsByTagName("li"))

//Este lo que hace es traer todos los elementos por su clase, en este no hace falta poner el punto ya que en el metodo dice explicitamente que vas a escojer clases
console.log(document.getElementsByClassName("card"))

//Esto lo que hace es escojer los elementos que tengan una propiedad nombre
console.log(document.getElementsByName("nombre"))

//Esto lo que hace es escojer los elementos por su id, pero este esta en singular, nuevamente no hace falta poner #, porque en el metodo dice que escojeras un id
console.log(document.getElementById("menu"))

//Los 3 primeros de seleccionar por tag name, por class name y por name, han sido remplazados por uno llamado querySelector

//En este si hay que especificar si es un id o una clase, ya que en el metodo no dice explicitamente el nombre
console.log(document.querySelector("#menu"))

//En querySelector si le introduces una etiqueta, solo traera la primera coincidencia
console.log(document.querySelector("a"))

//querySelectorAll lo que hace es lo mismo que querySelector pero trae todas las coincidencias
//Se le puede usar el .length
//Se puede usar el forEach

console.log(document.querySelectorAll("a").length)
document.querySelectorAll("a").forEach((el) => console.log(el))

//Se puede hacer como en los arrays y decirles cual elemento queremos agarrar de todos con los []
console.log(document.querySelectorAll(".card")[2])

//Se pueden seleccionar selectores descendientes, poniendo como en css
console.log(document.querySelectorAll("#menu li"))

//para id vamos a utilizar getElementById, para seleccionar el primer selector valido se utiliza querySelector y para traer todos usamos querySelectorAll
