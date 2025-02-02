const d = document

d.addEventListener("DOMContentLoaded", () => {
  const form = d.querySelector(".contactForm")
  const inputs = d.querySelectorAll(".contactForm [data-required]")

  inputs.forEach((input) => {
    const span = d.createElement("span")
    span.id = input.name
    span.textContent = input.title
    span.classList.add("contactFormError", "none")
    input.insertAdjacentElement("afterend", span)
  })
  
  form.addEventListener("keyup", (e) => {
    const pattern = e.target.pattern || e.target.dataset.pattern
    
    if (pattern && e.target.value !== ""){
      let regex = new RegExp(pattern)
      return !regex.exec(e.target.value) 
      ? d.getElementById(e.target.name).classList.add("isActive")
      : d.getElementById(e.target.name).classList.remove("isActive")
    }
  })
  

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("enviando")
  })
})