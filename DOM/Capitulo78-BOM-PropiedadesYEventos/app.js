window.addEventListener("resize", (e) => {
  console.clear()
  console.log(`Evento Resize`)
  console.log(window.innerWidth)
  console.log(window.innerHeight)
  console.log(window.outerHeight)
  console.log(window.outerWidth)
  console.log(window.outerWidth)
  console.log(window.scrollX)
  console.log(window.scrolly)
  console.log(e)
})

window.addEventListener("scroll", (e) => {
  console.clear()
  console.log(`Evento scroll`)
  console.log(window.scrollX)
  console.log(window.scrolly)
  console.log(e)
})

//Es mejor utilizar DOMContentLoader ya que se carga directamente el documento. en el evento load, debe cargar la ventana completa, por lo que tarda mas

window.addEventListener("load", (e) => {
  console.log(`Evento Load`)
  console.log(screenX)
  console.log(screenY)
})

document.addEventListener("DOMContentLoaded", (e) => {
  console.log(`Evento Load`)
  console.log(screenX)
  console.log(screenY)
})
