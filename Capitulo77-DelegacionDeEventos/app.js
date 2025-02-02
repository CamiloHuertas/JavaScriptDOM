const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
  $linkEventos = document.querySelector(".eventos-flujo a")

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo origino ${e.target.className}`
  )
}

//No es practico poner addEventListeners a cada elemento que tengamos, es añadir el listener al documento y despues validar

document.addEventListener("click", (e) => {
  console.log(`Click en `, e.target)

  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e)
  }

  if (e.target.matches(".eventos-flujo a")) {
    alert(`Hola soy tu amigo camilo`)
    //preventDefault cancela la accion por defecto de un elemento
    //Ya no es necesario porque le asignamos el listener al nodo raiz que es el document, este ya no tiene ningun padre
    e.preventDefault()
  }
})

$linkEventos.addEventListener("click", (e) => {
  alert(`Hola soy tu amigo camilo`)
  //preventDefault cancela la accion por defecto de un elemento
  e.preventDefault()
  e.stopPropagation()
})
