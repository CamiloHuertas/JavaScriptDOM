(() => {
  const $fetch = document.getElementById("fetch")
  const $fragment = document.createDocumentFragment()

  // A fetch se le pasa la URL y un objeto de opciones
  // Devuelve una promesa, por lo que se hace .then() para la siguiente instancia y .catch() para el error
  fetch("https://jsonplaceholder.typicode.com/users", {})
  .then((res) => {
    console.log(res);
    
    // Originalmente esta como un readableStream. Hay que convertirlo mediante .json()
    return res.ok ? res.json() : Promise.reject(res) //Con un reject explicito, se va directamente el catch
  }) 
  .then((jsonData) => {
    console.log(jsonData); //Esto ya devuelve la data correctamente. Se toma del anterior then
  
    jsonData.forEach((data) => {
      const li = document.createElement("li")
      li.innerHTML = `${data.name} -- ${data.email} -- ${data.phone}`
      $fragment.appendChild(li)
    })

    $fetch.appendChild($fragment)

  })
  .catch((err) => {
    console.log(err);
    let msg = err.statusText || `Ocurrio un error`
    $fetch.innerHTML = `Error: ${err.status}: ${msg}`
    
  }) // Parte negativa, then manda un error
  .finally(() => console.log("Esto se ejecuta siempre")) //finally ejecuta cualquier cosa independientemente del res
})

();