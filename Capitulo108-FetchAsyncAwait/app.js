(() => {
  const $fetchAsync = document.getElementById("fetch")
  const $fragment = document.createDocumentFragment()


  async function getData() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users")  
    let json = await res.json()

    // En estas funciones hay que manipular el error manualmente. Se puede hacer asi:
    // El objeto throw new Error solo acepta texto, por eso solo throw y objeto, esto se va directo al catch

    if (!res.ok){
      throw {status: res.status, statusText: res.statusText}
    }

    json.forEach((el) => {
      const li = document.createElement("li")
      li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
      $fragment.appendChild(li)
    })

    $fetchAsync.appendChild($fragment)
  } catch (err) {
    let msg = err.statusText || "Ocurrio un error"
    $fetchAsync.innerHTML = `Error ${err.status}: ${msg}`

  } finally {

  }
}

  getData()
})();