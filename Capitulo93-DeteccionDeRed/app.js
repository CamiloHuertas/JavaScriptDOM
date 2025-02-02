const d = document
const n = navigator
const banner = d.querySelector(".banner")
const bannerText = d.querySelector(".banner h1")

d.addEventListener("DOMContentLoaded", () => {

  const isOnline = () => {
    if (n.onLine){
      bannerText.textContent = "Conexion Restablecida"
      banner.style.background = "green"
    } else {
      bannerText.textContent = "Conexion Perdida"
      banner.style.background = "red"
    }
  }

  window.addEventListener("online", () => isOnline())
  window.addEventListener("offline", () => isOnline())
})
