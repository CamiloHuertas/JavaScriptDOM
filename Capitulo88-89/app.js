const d = document

const darkModeActivation = (btn) => {
let darkButton = d.querySelector(btn)
let selectors = d.querySelectorAll("[data-darkMode]")

  darkButton.addEventListener("click", () => {
    if (darkButton.textContent === "Light") {
      selectors.forEach((el) => {
        darkButton.textContent = "Dark"
        el.classList.add("lightMode")
        el.classList.remove("darkMode")
      })
    } else if (darkButton.textContent === "Dark") {
      selectors.forEach((el) => {
        darkButton.textContent = "Light"
        el.classList.add("darkMode")
        el.classList.remove("lightMode")
      })
    }
  })


}


d.addEventListener("DOMContentLoaded", darkModeActivation(".themeBtn"))