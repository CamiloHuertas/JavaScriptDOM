const d = document
const btn = d.querySelector(".ganadorBtn")
const players = d.querySelectorAll(".player")


btn.addEventListener("click", () => {
  const randomNumber = Math.round(Math.random() * players.length -1)
  const winner = players[randomNumber]


  console.log(`El ganador es: ${winner.textContent}`);
})
