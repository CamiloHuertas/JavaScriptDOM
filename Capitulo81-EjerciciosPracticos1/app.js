const d = document

const btn = d.querySelector(".panelBtn")

btn.addEventListener("click", (e) => {
  let panel = d.querySelector(".panel")
  let panelBtn = d.querySelector(".panelBtn")
  panel.classList.toggle("active")
  panelBtn.classList.toggle("is-active")
})
