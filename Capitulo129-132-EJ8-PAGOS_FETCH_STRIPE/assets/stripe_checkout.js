import keys from "./keys.js";

const d = document,
      $caldos = d.getElementById("caldos"),
      $template = d.getElementById("caldo-template").content,
      $fragment = d.createDocumentFragment(),
      fetchOptions = {
        headers: {
          Authorization: `Bearer ${keys.secret}` 
        }
      }


let prices, products;

const moneyFormat = (num) => `$${num.slice(0, -2)}.${num.slice(-2)}`

// promise all lo que hace es validar primero todas las promesas antes de seguir
Promise.all([
  fetch("https://api.stripe.com/v1/products", fetchOptions), 
  fetch("https://api.stripe.com/v1/prices", fetchOptions)
])
.then(responses => Promise.all(responses.map((res) => res.json())))
.then((json) => {
  products = json[0].data
  prices = json[1].data

  prices.forEach((el) => {
    let productData = products.filter((product) => product.id === el.product)
    console.log(productData);

    $template.querySelector(".caldo").setAttribute("data-price", el.id)
    $template.querySelector("img").src = productData[0].images[0]
    $template.querySelector("img").alt = productData[0].name
    $template.querySelector("figcaption").innerHTML = `
      ${productData[0].name}
      <br>
      ${moneyFormat(el.unit_amount_decimal)} ${el.currency}
    `

    let $clone = d.importNode($template, true)
    $fragment.appendChild($clone)
  })
  
  $caldos.appendChild($fragment)
})


d.addEventListener("click", (e) => {
  if (e.target.matches(".caldo *")){
    let priceId = e.target.parentElement.getAttribute("data-price")
    console.log(priceId);
    Stripe(keys.public).redirectToCheckout({
      lineItems: [{price: priceId, quantity: 1}],
      sucessUrl: "",
      cancelurl: ""
    })
    .then(res => {

      console.log(res);
      

      if (res.error){
        $caldos.insertAdjacentHTML("afterend", res.error.message)
      }
    })
  }
})