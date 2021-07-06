console.log(window)
console.log(window.document)
// No es necesario estar poniendo window en todo

console.log(document) //Esto selecciona todo el html y el doctype
console.log(document.head) //Esto selecciona el head
console.log(document.body) //Esto selecciona el body
console.log(document.documentElement) //Esto selecciona el html entero sin el doctype
console.log(document.doctype) //Esto selecciona solo el doctype
console.log(document.charset) //Esto selecciona solo el charset
console.log(document.title) //Esto selecciona solo el titulo

//Los html Collections no son arreglos de javascript, por lo tanto no se les pueden aplicar sus metodos, es una coleccion de elementos del html

console.log(document.links) //Esto selecciona solo los links
console.log(document.images) //Esto selecciona solo las imagenes
console.log(document.forms) //Esto selecciona solo los formularios
console.log(document.styleSheets) //Esto selecciona solo los archivos css
console.log(document.scripts) //Esto selecciona las etiquetas script

setTimeout(() => {
  console.log(document.getSelection().toString()) //Esto selecciona las etiquetas script
}, 2000)

document.write(`<h2>Hola mundo desde el DOM</h2>`) //Esto escribe en el documento hasta al final del documento, especificamente hasta la etiqueta de cierre del body
