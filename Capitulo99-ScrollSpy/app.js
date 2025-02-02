const d = document

d.addEventListener("DOMContentLoaded", () => {

// El callback recibe las entries, que son los elementos a observar
  const sections = d.querySelectorAll(".div ")

  const options = {
    threshold: 1,
  } 

  const callback = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id")
      const asideTarget = d.querySelector(`a[href="#${id}"]`).parentElement
      if (entry.isIntersecting){
        asideTarget.classList.add("active")
      } else {
        asideTarget.classList.remove("active")
      }
    })
  }
  // IntersectionObserver es una API que recibe 2 params. Un Callback y una serie de opciones
  const observer = new IntersectionObserver(callback, options)
  sections.forEach(div => observer.observe(div))

})