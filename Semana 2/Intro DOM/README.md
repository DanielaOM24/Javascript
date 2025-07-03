# Ejercicios preparatorios para trabajar con el DOM

#### Estos ejercicios te ayudarán a desarrollar la lógica necesaria para recorrer estructuras de datos y prepararte para mostrarlas dinámicamente en una página web.
## Parte 1: Arrays orientados al DOM

  ##### Tienes un array de colores. Recorre ese array y crea un mensaje por cada color en formato: "El color X es muy bonito". Imagina que luego mostrarás cada mensaje en un <div>.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colores Bonitos</title>
</head>
<body>
    <h1>Mensajes de colores</h1>
    <div class="container">

    </div>
    <script src="./colores.js"></script>
</body>
</html>
``


```js
let array =['rojo', 'verde', 'azul', 'amarillo', 'naranja', 'morado']
let container = document.querySelector('.container')

container.innerHTML= `<div>`
container.innerHTML += `<h1>Colores</h1>`
array.forEach(color => {
    container.innerHTML += `<li>El color ${color} es muy bonito</li>`
})
container.innerHTML+= `</div>`

```


  ##### A partir de un array de frases motivadoras, crea un nuevo array donde cada frase esté envuelta en una etiqueta HTML.
  ```js
  let frases =['La vida es bella', 'El sol brilla para todos', 'Cada día es una nueva oportunidad', 'La felicidad está en las pequeñas cosas','sigue adelante incluso cuando sea difícil']
  let container = document.getElementById('container')

  container.innerHTML= `<div>`+
  container.innerHTML += `<h1>Frases motivadoras</h1>`
  frases.forEach(frase => {
  container.innerHTML += `<li>La frase del día  para tí es : ${frase} </li>`
  })
  container.innerHTML+= `</div>`
  
  ```

##### Recorre un array de números y devuelve otro array de <li> con cada número. Piensa que será una lista HTML para mostrar luego en pantalla.
```js
const numeros = [10,60,80,50,90];

const  listaHTML=
numeros.map(function(numero){
    return <li> ${numero} </li>;});

console.log(listaHTML)
document.getElementById("milista").innerHTML=listaHTML.join('');
```

## Parte 2: Objetos pensados para mostrarse

    Dado un objeto persona con nombre, edad y ocupación, construye un string en formato HTML para mostrar esa información como una tarjeta.

    A partir de un objeto que representa una canción (titulo, artista, duracion), crea una estructura HTML en formato <div> que contenga esa información. Piensa cómo inyectarías eso al DOM.

    Dado un objeto con múltiples propiedades (como producto.nombre, producto.precio, producto.stock), construye una lista <ul> donde cada propiedad sea un <li> con clave y valor.

Parte 3: Listas de Objetos enfocadas en visualización

    Recorre un array de usuarios (con nombre y correo) y crea un array de etiquetas <div> que incluyan esa información formateada como tarjeta de contacto.

    Dado un array de libros con titulo, autor y año, transforma cada uno en una cadena de texto con formato: "Título (Año) - Autor". Luego imagina que cada una irá dentro de un <li>.

    Tienes una lista de tareas (con descripcion y completada). Crea una función que genere una estructura HTML diferente si la tarea está completa o pendiente. Por ejemplo: mostrar un ✅ o ❌ antes del texto.

