const d = document
const digitalClock = (clock, btnPLay, btnStop) => {
  let clockTiempo

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPLay)) {
      clockTiempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString()
        d.querySelector(clock).innerHTML = `<h3> ${clockHour}</h3>`
      }, 1000)

      e.target.disabled = true
    }
    if (e.target.matches(btnStop)) {
      clearInterval(clockTiempo)
      d.querySelector(clock).innerHTML = null
      d.querySelector(btnPLay).disabled = false
    }
  })
}

const clock = () => {}

document.addEventListener("DOMContentLoaded", (e) => {
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj")
})

const alarm = (sound, btnPLay, btnStop) => {
  let alarmTime
  const $alarm = d.createElement("audio")
  $alarm.src = sound

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPLay)) {
      alarmTime = setTimeout(() => {
        $alarm.play()
      }, 2000)

      e.target.disabled = true
    }
    if (e.target.matches(btnStop)) {
      clearTimeout(alarmTime)
      $alarm.currentTime = 0
      d.querySelector(btnPLay).disabled = false
    }
  })
}

d.addEventListener("DOMContentLoaded", () => {
  alarm("assets/sonido.mp3", "#activar-alarma", "#desactivar-alarma")
})
