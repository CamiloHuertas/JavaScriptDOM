const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  //Clone cards es un metodo muy parecido al importNode, la diferencia es que import node se basa e importa la etiqueta template del HTML, encambio cloneNode lo hace directamente desde JS, en este caso solo recibe un boolean
  $cloneCards = $cards.cloneNode(true)

$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption>Any</figcaption>  
`

$newCard.classList.add("card")

//eplace child lo que hace es reemplazar un hijo, recibe 2 parametros, el primero es por cual elemento queremos reemplazar, y el segundo cual es el elemento a ser reemplazado

//$cards.replaceChild($newCard, $cards.children[2])

//Para poner otra imagen antes de cierto elemento se usa el insertBefore,tambien usa 2 parametros, el primero es el nuevo nodo, y el siguiente es la referencia.

//$cards.insertBefore($newCard, $cards.firstElementChild)

//para quitar algun nodo se utiliza el metodo removeChild, y solo recibe un parametro que es el elemento que queremos eliminar
$cards.removeChild($cards.lastElementChild)
document.body.appendChild($cloneCards)
