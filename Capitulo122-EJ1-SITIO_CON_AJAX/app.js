const d = document,
      $main = d.querySelector("main"),
      $links = d.querySelectorAll("a")

d.addEventListener("DOMContentLoaded", () => {
  
  const getHTML = async (url) => {
    try {  
      let res = await fetch(url)
      let html = await res.text()

      $main.innerHTML = html; // Actualiza el contenido del <main>

    } catch (error) {
  
    }
  }
  
  $links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      let href = link.getAttribute("href")
      getHTML(href)    
    })
  })
  
  getHTML("assets/home.html")

})