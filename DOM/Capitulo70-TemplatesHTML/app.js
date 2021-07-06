//Los templates HTML son etiquetas que permiten la clonacion del elemento que tengan dentro mediante JS, otra cosa es que las etiquetas template no se renderizan en el dom

const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardContent = [
    {
      title: "Tecnología",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ]

cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img)
  $template.querySelector("img").setAttribute("alt", el.title)
  $template.querySelector("figcaption").textContent = el.title

  //El metodo importNode lo que hace es clonar lo que le digamos, recibe 2 valores, el primero es lo que queremos tener en base para clonar y el segundo es un boolean, si se pone en true clona todo, si se pone false solo clona la etiqueta template
  let $clone = document.importNode($template, true)
  $fragment.appendChild($clone)
})

$cards.appendChild($fragment)
