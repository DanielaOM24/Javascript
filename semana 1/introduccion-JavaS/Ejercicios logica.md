# Condicional
## Ejercicio: Clasificador de Triángulos

### Programa que reciba tres números positivos que representan las longitudes de los lados de un triángulo. El programa debe determinar si los lados forman un triángulo válido y, si es válido, clasificarlo
```js
let lado1 = prompt("Ingrese el primer lado del triángulo");
let lado2 = prompt("Ingrese el segundo lado del triángulo");
let lado3 = prompt("Ingrese el tercer lado del triángulo");

if (lado1 === lado2 && lado2 === lado3) {
    console.log("El triángulo es equilátero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("El triángulo es isósceles");
} else {
    console.log("El triángulo es escaleno");
}
```
## Metodos de listas


### 1.Quita el primer elemento de una variedad de frutas.
```js
let frutas = ['manzana', 'banana', 'naranja', 'uva'];
frutas.shift();
```

### 2.Agrega un número al final de una matriz de números.
```js
let numeros = [1, 2, 3, 4, ];
numeros.push(5);
```

### 3.Agrega un elemento al principio de una matriz de palabras.
```js
let palabras = ['sol', 'luna', 'estrella',];
palabras.unshift('universo');
```

## 4. Elimina el último elemento de una matriz de colores.
```js
let colores = ['rojo', 'verde', 'azul', 'amarillo'];
colores.pop();
```


## 5.Extrae una porción de un array sin modificar el original.
```js
let animales = ['perro', 'gato', 'pez', 'ave'];
let algunosanimales = animales.slice(1, 4);
```


## 6.Reemplace un elemento en una posición específica del array.
```js
let frutas = ['manzana', 'banana', 'naranja', 'uva'];
frutas[1] = 'pera';
```

## 7.Une los elementos de una matriz de palabras en una sola cadena separada por espacios.
```js
let palabra = ['sol', 'luna', 'estrella', 'universo'];
let frase = palabra.join(' ');
```

### 8.Ordena alfabéticamente un array de nombres.
```js
let nombres = ['Juan', 'Maria', 'Pedro', 'Ana'];
nombres.sort();
```

## 9.Invierta el orden de los elementos de un array.
```js
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
number.reverse();

```

## 10.Verifique si existe un valor específico dentro del arreglo.
```js
let frutas = ['manzana', 'banana', 'naranja'];
let existe = frutas.includes('banana');
```

## Ejercicios con for, for...in y for...of

## Imprimir los caracteres de una palabra Usa for...of para recorrer una palabra letra por letra e imprimir cada letra.
```js
const palabra = "Hola";

for (const letra of palabra) {
  console.log(letra);
}
```

## Contar del 1 al 5 usando for clásico Usa un bucle for para imprimir los números del 1 al 5.
```js
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```
## Mostrar la posición de cada letra en una palabra usando for...in Usa for...in para recorrer una palabra e imprimir el índice y el carácter en esa posición.
```js
const palabra = "Hola";

for (const indice in palabra) {
  console.log(`Índice: ${indice}, Letra: ${palabra[indice]}`);
}
```
## Con listas (arrays)
## Recorrer una lista de nombres usando for...of Dado un array de nombres, imprime "Hola, [nombre]" usando for...of.
```js
const nombres = ["Ana", "Luis", "Carlos", "Sofía"];

for (const nombre of nombres) {
  console.log(`Hola, ${nombre}`);
}
```
## Imprimir índices de una lista usando for...in Usa for...in para imprimir los índices de un array de colores.
```js
const colores = ["Rojo", "Verde", "Azul", "Amarillo"];

for (const indice in colores) {
  console.log(`Índice: ${indice}`);
}
```
## Imprimir índice y valor de cada número en un array Usa for...in para obtener el índice y luego acceder al valor en la misma línea.
```js
const numeros = [10, 20, 30, 40];

for (const i in numeros) {
  console.log(`Índice: ${i}, Valor: ${numeros[i]}`);
}
```
## Ejercicios de Objetos
## Crea un objeto persona con las propiedades: nombre, edad y ciudad.
 ## Muestra el valor de una propiedad específica del objeto persona.
```js
const persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid",
}
// Se imprime la edad de la persona Tambien se puede usar corchetes como otra forma de imprimir
console.log(persona.edad);
```
## Modifica el valor de una propiedad existente en un objeto libro.
```js
const libro = {
    titulo: "padre rico padre pobre",
    autor: "Robert Kiyosaki",
    año: 1983,
}
libro.año = 1997;
```
## Agrega una nueva propiedad a un objeto auto.
```js
const auto = {
    marca: "Toyota",
    modelo: "pradoTXL",
    año: 2024,
}

auto.color = "blanco";
```
## Recorre un objeto estudiante con un bucle y muestra todas sus claves y valores.
```js
const celular = {
    marca: "Samsung",
    modelo: "Galaxy S23",
    precio: 1000,
    color: "Negro",
}

for (const clave in celular) {
    console.log((`${clave}: ${celular[clave]}`));
}
```
## Ejercicios para practicar funciones

## Saludo personalizado Crea una función llamada saludar que reciba un nombre como parámetro y devuelva un saludo del tipo: "Hola, [nombre]!".
```js
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

console.log(saludar("María"));  // Hola, María!
```
## Suma de dos números Escribe una función sumar que reciba dos números como parámetros y retorne su suma.
```js
function sumar(a, b) {
  return a + b;
}
console.log(sumar(5, 3));  // 8
```

## Número par o impar Crea una función llamada esPar que reciba un número y devuelva true si es par, o false si es impar.
```js
function esPar(numero) {
  return numero % 2 === 0;
}

console.log(esPar(4));  // true
console.log(esPar(7));  // false
```
## Calcular el área de un rectángulo Define una función areaRectangulo que reciba base y altura como argumentos y devuelva el área.
```js
function areaRectangulo(base, altura) {
  return base * altura;
}

console.log(areaRectangulo(5, 3));  // 15
```
## Convertir grados Celsius a Fahrenheit Escribe una función celsiusAFahrenheit que reciba una temperatura en grados Celsius y devuelva el valor en Fahrenheit usando la fórmula: F = C * 1.8 + 32
```js
function celsiusAFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

console.log(celsiusAFahrenheit(25));  // 77
```
