const $btnAbrir = document.getElementById("abrir-ventana"),
  $btnCerrar = document.getElementById("cerrar-ventana"),
  $btnImprimir = document.getElementById("imprimir-ventana")

let ventana

$btnAbrir.addEventListener("click", (e) => {
  //Open abre el dominio declarado entre parentesis
  ventana = window.open("https://youtube.com")
})
$btnCerrar.addEventListener("click", (e) => {
  //Esto cierra la ventana en la que estas, por lo que hay que almacenar la
  //pagina que queremos cerrar en una variable
  // window.close()
  ventana.close()
})
$btnImprimir.addEventListener("click", (e) => {
  //Manda a imprimir la pagina
  window.print()
})
