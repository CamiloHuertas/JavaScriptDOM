const d = document
const searchInput = d.querySelector(".searchInput")
const cards = d.querySelectorAll(".card")




searchInput.addEventListener("keyup", () => { 
  const inputValue = searchInput.value.trim().toLowerCase()

  cards.forEach((card) => {
  const cardText = card.textContent.trim().toLowerCase()

  if (cardText.startsWith(inputValue)){
    card.style.display = "flex"
  } else {
    card.style.display = "none"
  }
  })
})