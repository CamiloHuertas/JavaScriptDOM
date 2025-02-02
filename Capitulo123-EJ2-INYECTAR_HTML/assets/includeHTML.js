document.addEventListener("DOMContentLoaded", () => {
  const includeHTML = async (el, url) => {
    try {
      let res = await fetch(url)
      let text = await res.text()
  
      el.outerHTML = text
    } catch (err) {
      console.log(err);
 
    }
  }

d.querySelectorAll("[data-include]").forEach((el) => {
  includeHTML(el, el.getAttribute("data-include"))
})
}) 