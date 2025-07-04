
// Definición de un objeto con productos, cada uno con id, nombre y precio
const products = {
    product1: { id: 1, name: "Laptop Gamer", price: 4800000 },
    product2: { id: 2, name: "Monitor Curvo", price: 1200000 },
    product3: { id: 3, name: "Teclado Mecánico", price: 350000 }
}
console.log("Product Object", products);

// Crear un Set con los nombres únicos de los productos
const setProducts = new Set(Object.values(products).map(product => product.name));
console.log("Set of unique products", setProducts);

// Crear un Map que relaciona categorías con productos
const mapProducts = new Map([
    ["Portátiles", "Laptop Gamer"],
    ["Accesorios", "Monitor Curvo"],
    ["Periféricos", "Teclado Mecánico"]
]);
console.log("Product and category map", mapProducts);

// Recorrer el objeto de productos e imprimir su id y detalles
for (const id in products) {
    console.log(`Products ID: ${id}, Details:`, products[id])
}

// Recorrer el Set e imprimir los nombres únicos de productos
for (const product of setProducts) {
    console.log("Unique product:", product);  
}

// Recorrer el Map e imprimir la categoría y el producto correspondiente
mapProducts.forEach((product, category) => {
    console.log(`Category: ${category}, Product : ${product}`)
});

// Imprimir todos los datos gestionados
console.log("Complete data management tests:");
console.log("Product list (Object):", products);
console.log("Unique product list (Set):", setProducts);
console.log("Categories and products (Map):", mapProducts);
