(()=>{
  const $axios = document.getElementById("axios")
  const $fragment = document.createDocumentFragment()

  // Axios lo que simplifica es el primer then de convertir la respuesta a json

  axios.get("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    let json = res.data
    json.forEach((el) => {
      const li = document.createElement("li")
      li.innerHTML = `${el.name} - ${el.email} -- ${el.phone}`
      $fragment.appendChild(li)
    })

    $axios.appendChild($fragment)

  })
  .catch((err) => {
    let msg = err.response.statusText || "Ocurrio un error"
    $axios.innerHTML = `Error ${err.response.status}: ${msg}`
  })
})()