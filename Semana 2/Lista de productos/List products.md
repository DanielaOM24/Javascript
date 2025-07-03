# Desafío: Recorrer Listas y Objetos

### En este ejercicio trabajarás con arrays de objetos y practicarás cómo recorrerlos correctamente para mostrar información en pantalla.
### 🛠 Objetivo
Mostrar una lista de productos en pantalla al hacer clic en un botón. Cada producto tiene nombre, precio y categoría.

### Solucion 
```js
let  array = [
    {nombre: "Leche", precio: "4200", categoria:"lacteos"},
    {nombre: "Arroz", precio: "2500", categoria:"Grano"},
    {nombre: "Gasesosa", precio:"8.500", categoria:"Bebidas"},
    {nombre: "papitas", precio: "4200", categoria:"mecato"},
    {nombre: "cebolla", precio: "2500", categoria:"viveres"}
];
let button = document.getElementById("mostrar-productos");
button.addEventListener("click",function (){
    let list = document.getElementById("contenedor-productos");

    array.forEach(function (objeto){
        let divproducto= document.createElement('div');
        divproducto.className= 'producto';
        divproducto.innerHTML= `
        <h3>${objeto.nombre}</h3>
        <p>${objeto.precio}</p>
        <p>${objeto.categoria}</p>
        `; 
       list.appendChild(divproducto)
    });
});

```


