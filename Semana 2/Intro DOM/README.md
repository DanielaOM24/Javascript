# Ejercicios preparatorios para trabajar con el DOM

### Estos ejercicios te ayudarán a desarrollar la lógica necesaria para recorrer estructuras de datos y prepararte para mostrarlas dinámicamente en una página web.
## Parte 1: Arrays orientados al DOM

 #### Tienes un array de colores. Recorre ese array y crea un mensaje por cada color en formato: "El color X es muy bonito".
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


#### A partir de un array de frases motivadoras, crea un nuevo array donde cada frase esté envuelta en una etiqueta HTML.
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

#### Recorre un array de números y devuelve otro array de <li> con cada número. Piensa que será una lista HTML para mostrar luego en pantalla.
```js
const numeros = [10,60,80,50,90];

const  listaHTML=
numeros.map(function(numero){
    return <li> ${numero} </li>;});

console.log(listaHTML)
document.getElementById("milista").innerHTML=listaHTML.join('');
```

## Parte 2: Objetos pensados para mostrarse

#### Dado un objeto persona con nombre, edad y ocupación, construye un string en formato HTML para mostrar esa información como una tarjeta.
```js
let persona = {
    nombre: "Juan",
    edad: 20,
    ocupacion: "Programador",
}

const TarjetaPersonaHTML = `
    <div class="tarjetas">
    <h2>${persona.nombre}</h2>
    <p>${persona.edad} años</p>
    <p>${persona.ocupacion}</p>
    </div>
`
document.body.innerHTML = TarjetaPersonaHTML;
```
#### A partir de un objeto que representa una canción (titulo, artista, duracion), crea una estructura HTML en formato <div> que contenga esa información. Piensa cómo inyectarías eso al DOM.
```js
let cancion = {
    titulo: "Top diesel",
    artista: "beele",
    duracion: "2:46",
}

const contenedor = document.getElementById("musica");

contenedor.innerHTML = `
<h2>${cancion.titulo}</h2>
<p>${cancion.artista}</p>
<p>${cancion.duracion}</p>`;
```
#### Dado un objeto con múltiples propiedades (como producto.nombre, producto.precio, producto.stock), construye una lista <ul> donde cada propiedad sea un <li> con clave y valor.
```js
const contenedor = document.getElementById("info-producto");

let producto = {
    nombre: "Playera",
    precio: 100,
    stock: 10,
    marca: "Nike",
}

const lista = document.createElement("ul");

for (let clave in producto) {
    const item = document.createElement("li");
    item.textContent = `${clave}: ${producto[clave]}`;
    lista.appendChild(item);
}

contenedor.appendChild(lista);
```
### Parte 3: Listas de Objetos enfocadas en visualización

#### Recorre un array de usuarios (con nombre y correo) y crea un array de etiquetas <div> que incluyan esa información formateada como tarjeta de contacto.
```js
const usuarios = [
    { nombre: "Juan Perez", correo: "juanperez@gmail.com" },
    { nombre: "Maria Lopez", correo: "marialopez@gmail.com" },
    { nombre: "Pedro Gomez", correo: "pedrogomez@gmail.com" },
    { nombre: "Ana Martinez", correo: "anamartinez@gmail.com" },
];

const lista = usuarios.map(usuario => {
    const div = document.createElement("div");
    div.classList.add("usuario");
    div.innerHTML = `
        <h2>${usuario.nombre}</h2>
        <p>${usuario.correo}</p>`;
    return div;
});

const contenedor = document.getElementById("info-producto");

lista.forEach(div => {
    contenedor.appendChild(div);
});
```
#### Dado un array de libros con titulo, autor y año, transforma cada uno en una cadena de texto con formato: "Título (Año) - Autor". Luego imagina que cada una irá dentro de un <li>.
```js

const libros = [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967 },
    { titulo: "1984", autor: "George Orwell", año: 1949 },
    { titulo: "El Principito", autor: "Antoine de Saint-Exupéry", año: 1943 },
  ];
  

  const descripciones = libros.map(libro => `${libro.titulo} (${libro.año}) - ${libro.autor}`);
  

  const lista = document.createElement("ul");
  
  descripciones.forEach(texto => {
    const li = document.createElement("li");
    li.textContent = texto;
    lista.appendChild(li);
  });
  

  const contenedor = document.getElementById("info-libros");
  contenedor.appendChild(lista);
```
#### Tienes una lista de tareas (con descripcion y completada). Crea una función que genere una estructura HTML diferente si la tarea está completa o pendiente. Por ejemplo: mostrar un ✅ o ❌ antes del texto.
```js
const tareas = [
    { descripcion: "Hacer ejercicio", completada: true },
    { descripcion: "Estudiar JavaScript", completada: false },
    { descripcion: "Lavar la ropa", completada: true },
    { descripcion: "Preparar la cena", completada: false }
  ];
  
  function mostrarTareas(tareas) {
    const lista = document.createElement("ul");
  
    tareas.forEach(tarea => {
      const li = document.createElement("li");
      const estado = tarea.completada ? "✅" : "❌";
      li.textContent = `${estado} ${tarea.descripcion}`;
  
     
      if (tarea.completada) {
        li.style.color = "green";
        li.style.textDecoration = "line-through";
      } else {
        li.style.color = "red";
      }
  
      lista.appendChild(li);
    });
  
    return lista;
  }
  
  const contenedor = document.getElementById("lista-tareas");
  const listaHTML = mostrarTareas(tareas);
  contenedor.appendChild(listaHTML);
```

