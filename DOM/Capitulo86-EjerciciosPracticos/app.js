const d = document

const countDown = (id, limitDate, finalMsg) => {
  const $countDown = d.getElementById(id),
    countDownDate = new Date(limitDate).getTime()

  let countDownTime = setInterval(() => {
    let now = new Date().getTime(),
      limitTime = countDownDate - now,
      days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
      hours = Math.floor(
        (limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes = Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60)),
      seconds = Math.floor((limitTime % (1000 * 60)) / 1000)

    $countDown.innerHTML = `<h3>Faltan: ${days} Dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos</h3>`

    console.log(countDownDate, now, limitTime)

    if (limitTime < 0) {
      clearInterval(countDownTime)
      $countDown.innerHTML = `<h3>${finalMsg}</h3>`
    }
  }, 1000)
}

d.addEventListener("DOMContentLoaded", () => {
  countDown("countDown", "October 23, 2021", "Feliz Cumpleaños")
})
