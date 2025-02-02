const $divsEventos = document.querySelectorAll(".eventos-flujo div")
console.log($divsEventos)

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo origino ${e.target.className}`
  )
}

//Esto al darle al div 3 se ejecuta 3 veces, porque desde ese div 3 que esta contenido en todos los demas, les propaga su funcion, empezando en 3 console logs, despues div 2 ejecuta 2, y finalmente div 1 ejecuta solo 1
$divsEventos.forEach((div) => {
  //Fase de burbuja es sin especificar el tercer valor
  // div.addEventListener("click", flujoEventos)

  //Fase de captura es especificando el 3er valor como true

  // div.addEventListener("click", flujoEventos, true)

  //En el tercer parametro si pones solo true o false haces referencia a las fases de burbuja o captura, pero se le puede espercificar mas cosas
  div.addEventListener("click", flujoEventos, {
    //Capture: false es de adentro hacia afuera, captureL true es de afuera hacia adentro
    capture: false,
    //La propiedad once detecta si solo queremos que se ejecute una vez, en valor true solo se activa una vez, en false es predeterminado y se activa cuantas veces queramos
    once: true,
  })
})
