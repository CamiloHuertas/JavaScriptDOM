const d = document;

const form = d.querySelector(".responsiveTester");
const cerrar = d.querySelector(".cerrarBtn")

let tester

form.addEventListener("submit", (e) => {
  e.preventDefault();
  tester = window.open(
    form.direccion.value,
    "tester",
    `innerWidth=${form.ancho.value}, innerHeight=${form.alto.value}`
  );
});

console.log(cerrar);


cerrar.addEventListener("click", () => {
  tester.close()
})


