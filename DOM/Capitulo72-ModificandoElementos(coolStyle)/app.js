/* 
.insertAdjacent...
    .insertAdjacentElement(position,el)
    .insertAdjacentHTML(position,html)
    .insertAdjacentText(position,text)

posiciones:
    beforebegin (hermano anterior)
    afterbegin (primer hijo)
    beforeend (ultimo hijo)
    afterend  (hermano siguiente)
*/

const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure")

let $contentCard = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption></figcaption>  
`

$newCard.classList.add("card")

// InsertAdjacentElement ew para elementos, no texto
// $cards.insertAdjacentElement("beforebegin", $newCard)

// $cards.insertAdjacentElement("beforeend", $newCard)

// $cards.insertAdjacentElement("afterend", $newCard)

// $cards.insertAdjacentElement("afterbegin", $newCard)

//InsertAdjacentHTML

$newCard.insertAdjacentHTML("beforeend", $contentCard)

$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any")

//Prepend es como un insertAdjacentElement con posicion afterbegin
$cards.prepend($newCard)

//Before es como insertAdjacentElement con posicion beforebegin
$cards.before($newCard)

//append es como insertAdjacentElement con posicion beforeend
$cards.append($newCard)

//append es como insertAdjacentElement con posicion afterend
$cards.after($newCard)
