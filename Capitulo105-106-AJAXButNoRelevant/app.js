// No es comun usar hoy en dia XMLHttpRequest, pero hay que saber como funciona

(() => {
  const xhr = new XMLHttpRequest()  
  const $xhr = document.querySelector("#xhr")
  const $fragment = document.createDocumentFragment()
  
  xhr.addEventListener("readystatechange",(e) => {
    if (xhr.readyState !== 4) return;
      if (xhr.status >= 200 && xhr.status < 300){
        let json = JSON.parse(xhr.responseText) 
        
        json.forEach((el) => {
          const li = document.createElement("li")
          li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
          $fragment.appendChild(li)
        })

        $xhr.appendChild($fragment)
        
      } else {
        console.log(`Error`);
        let msg = xhr.statusText || "Ocurrio un error"
        $xhr.innerHTML = `Error ${xhr.status}: ${msg}`
      }
  })

  // Estos numeros son definidos como los codigo de estado

  // Tambien se puede poner el json en un archivo local y pedirle informacion a ese 

  xhr.open("GET","https://jsonplaceholder.typicode.com/users")
  xhr.send()
  
})();