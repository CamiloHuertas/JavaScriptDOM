const d = document,
  shortCuts = (e) => {
    console.log(e)
    console.log(e.type)
    console.log(e.key)
    console.log(e.keyCode)
    console.log(e.ctrlKey)
    console.log(e.altKey)
    console.log(e.shiftKey)

    if (e.key === "a" && e.altKey) {
      alert("Alert released with shortcut")
    }
    if (e.key === "c" && e.altKey) {
      confirm("Confirmation released with shortcut")
    }
    if (e.key === "p" && e.altKey) {
      prompt("prompt released with shortcut")
    }
  }

d.addEventListener("keydown", (e) => {
  shortCuts(e)
  moveBall(e, ".ball", ".stage")
})

let x = 0,
  y = 0

const moveBall = (e, ball, stage) => {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitBall = $ball.getBoundingClientRect(),
    limitStage = $stage.getBoundingClientRect()
  console.log(e.keyCode)
  console.log(limitBall)
  console.log(limitStage)

  switch (e.keyCode) {
    case 37:
      if (Math.round(limitBall.left) > Math.round(limitStage.left)) x--

      break
    case 38:
      if (Math.round(limitBall.top) > Math.round(limitStage.top)) y--
      break
    case 39:
      if (Math.round(limitBall.right) < Math.round(limitStage.right)) x++
      break
    case 40:
      if (Math.round(limitBall.bottom) < Math.round(limitStage.bottom)) y++

      break
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`
}
