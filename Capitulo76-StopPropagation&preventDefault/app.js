const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
  $linkEventos = document.querySelector(".eventos-flujo a")

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo origino ${e.target.className}`
  )
  //Srop propagation lo que hace es que como en el propio metodo lo dice, detener la propagacion del evento, ya sea de burbuja o captura
  e.stopPropagation()
}

$divsEventos.forEach((div) => {
  // div.addEventListener("click", flujoEventos)

  // div.addEventListener("click", flujoEventos, true)

  div.addEventListener("click", flujoEventos, {
    capture: false,

    once: false,
  })
})

$linkEventos.addEventListener("click", (e) => {
  alert(`Hola soy tu amigo camilo`)
  //preventDefault cancela la accion por defecto de un elemento
  e.preventDefault()
  e.stopPropagation()
})
