//Se pueden hacer los eventos en el HTML pero no es la forma recomendada, todos estos empiezan en on
const holaMundo = () => {
  alert(`Hola mundo`)
  console.log(event)
}

//Esta es la forma de hacer lo mismo del HTML en el JS
//La desventaja de los eventos semanticos es que solo pueden ejecutar una funcion
const $eventoSemantico = document.getElementById("btn-semantico")

$eventoSemantico.onclick = holaMundo
//Para reducir la escritura de event, solo se pone e
$eventoSemantico.onclick = function (e) {
  alert(`Hola Manejador de eventos semantico`)
  console.log(e)
}

//Evento Multiple

const $eventoMultiple = document.getElementById("Evento-Multiple")

//AddEventListener crea un evento multiple, recibe 2 parametros, el primero es el tipo de evento que queremos crear, y el segundo es el listener que seria la funcion que queremos ejecutar
$eventoMultiple.addEventListener("click", holaMundo)

//Con arrowFunction y tambien puede ser con funcion Anonima
//La ventaja de estos eventos multiples es que pueden recibir varias funciones y no solo se limita a una
$eventoMultiple.addEventListener("click", (e) => {
  alert("Hola mundo manejador de eventos multiple")
  console.log(e)
  //type nos dice el tipo de evento que hemos generado
  console.log(e.type)
  //target nos dice que elemento ha sido el que origino ese evento
  console.log(e.target)
})
