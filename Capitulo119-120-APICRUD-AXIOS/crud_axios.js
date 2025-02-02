const d = document
const $table = d.querySelector(".crudTable")
const $form = d.querySelector(".crudForm")
const $title = d.querySelector(".crudTitle")
const $template = d.getElementById("crudTemplate").content
const $fragment = d.createDocumentFragment()


const getAll = async (e) => {
  // metodo GET
  try {
    let res = await axios.get("http://localhost:3000/santos")
    let json = await res.data

    json.forEach((el) => {
      $template.querySelector(".name").textContent = el.nombre
      $template.querySelector(".constelation").textContent = el.constelacion
      $template.querySelector(".edit").dataset.id = el.id
      $template.querySelector(".edit").dataset.name = el.nombre
      $template.querySelector(".edit").dataset.constellation = el.constelacion
      $template.querySelector(".delete").dataset.id = el.id
      
      let $clone = d.importNode($template, true)
      $fragment.appendChild($clone)
    })
    $table.querySelector("tbody").appendChild($fragment)
    
  } catch (err) {
    $table.insertAdjacentHTML(`afterend`, `<p><b>${err}</b></p>`)
  }
}

d.addEventListener("DOMContentLoaded", getAll)

$form.addEventListener("submit", async (e) => {
  e.preventDefault()
  if (!e.target.id.value){
    // Create POST
    try {
      let options = {
        method: "POST",
        headers: {
          "content-type": "application/json; charset=utf-8"
        },
        data: JSON.stringify({ //en Axios es "data", no "body"
          nombre: e.target.nombre.value,
          constelacion: e.target.constelacion.value,
        }) 
      }
      let res = await axios("http://localhost:3000/santos", options) //Como en opciones pone "POST", solo se pone axios

    } catch (err) {
      $table.insertAdjacentHTML(`afterend`, `<p><b>${err}</b></p>`)
    }
  } else {
    // Create PUT (UPDATE)
    try {
      let options = {
        method: "PUT",
        headers: {
          "content-type": "application/json; charset=utf-8"
        },
        data: JSON.stringify({ //en Axios es "data", no "body"
          nombre: e.target.nombre.value,
          constelacion: e.target.constelacion.value,
        }) 
      }
      let res = await axios(`http://localhost:3000/santos/${e.target.id.value}`, options) //Como en opciones pone "POST", solo se pone axios

    } catch (err) {
      $table.insertAdjacentHTML(`afterend`, `<p><b>${err}</b></p>`)
    }
  }
})

d.addEventListener("click", async (e) => {
  if (e.target.matches(".edit")){
    $title.textContent = "Editar Santo"
    $form.nombre.value = e.target.dataset.name
    $form.constelacion.value = e.target.dataset.constellation
    $form.id.value = e.target.dataset.id 
  }

  if (e.target.matches(".delete")){
    let isDelete = confirm(`Estas seguro de eliminar el id ${e.target.dataset.id}?`)

    if (isDelete){
      try {
        let options = {
          method: "DELETE",
          headers: {
            "content-type": "application/json"
          }
        }

        let res = await axios(`http://localhost:3000/santos/${e.target.dataset.id}`, options)
        if (!res.ok) throw {status: res.status}
        location.reload()

      } catch (err) {
        let msg = err.status || "Ocurrio un error"
        $form.insertAdjacentHTML("afterend", `<p><b>${err.status}: ${msg}</b></p>`)
      }
    }
  }
})