const $whatIsDom = document.getElementById("que-es")

let text = `
    <p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
    </p>
    <p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`

//Inner text lee lo que tenemos en un texto, pero no reconoce las etiquetas HTML y no es el estandar
$whatIsDom.innerText = text

//Text content si es el estandar, pero de igual forma no reconoce las etiquetas HTML, la diferencia entre estas 2 es que en textContent ignora los saltos de linea que hemos hecho en el codigo

// Si queremos una aplicacion que no envie etiquetas usas textContent si no queremos esto, usamos innerHTML
$whatIsDom.textContent = text

//La que mejor funciona y es la que siempre se usa es innerHTML, que esta si lee todo el codigo como si fuera HTML, asi que si reconoce todas las etiquetas
$whatIsDom.innerHTML = text

//La diferencia entre InnerHTMl y outerHTML es que inner reemplaza el CONTENIDO del elemento dom, Outer reemplaza por completo el elemento, asique elimina la etiqueta y se crea como un nuevo parrafo
$whatIsDom.outerHTML = text
