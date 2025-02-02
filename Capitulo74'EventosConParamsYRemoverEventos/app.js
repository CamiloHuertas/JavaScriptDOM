//Las funciones manejadoras de eventos solo se pueden poner uno, que seria el parametro event

const $eventoMultiple = document.getElementById("Evento-Multiple"),
  $eventoRemover = document.getElementById("evento-remover")

function saludar(nombre = "desconocid@") {
  alert(`Hola ${nombre}`)
}

//Esto da como resultado hola object mouse event porque como tal solo pueden tener un parametro que seria el del e
//Para que imprima lo que tenemos en esa funcion hay que hacer otra funcion que la ejecute
$eventoMultiple.addEventListener("click", (e) => {
  saludar()
  console.log(e)
})

//Tambien se pueden eliminar los eventos, solo se puede con manejadores multiples
//Aqui el removeEventListener va a dar un error, ya que el primer param que es el evento que queremos quitar si esta, pero el segundo que es cual funcion queremos quitar, no se puede declarar porque la pusimos como una funcion anonima

// $eventoRemover.addEventListener("dblclick", (e) => {
//   alert(`Removiendo el evento de tipo ${e.type}`)
//   console.log(e)
//   $eventoRemover.removeEventListener("dblclick")
// })

//Aqui esta bien hecho, hay que tener presente que los addevent listener si son sensibles al posicionamiento del codigo.

const removerDbClick = (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`)
  console.log(e)
  $eventoRemover.removeEventListener("dblclick", removerDbClick)
}
$eventoRemover.addEventListener("dblclick", removerDbClick)
