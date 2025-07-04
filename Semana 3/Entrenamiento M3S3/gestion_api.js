// Lectura de datos GET 
function obtenerProductos() {
    fetch('http://localhost:3000/productos')
        .then(response => response.json())
        .then(data => console.log("Productos disponibles:", data))
        .catch(error => console.error("Error al obtener productos", error));
}

obtenerProductos();

// Nuevos datos con POST - añadir un nuevo producto al servidor
function crearProducto(nuevoProducto) {
    if (!nuevoProducto.nombre || isNaN(nuevoProducto.precio)) {
        console.error("Dato inválido: 'nombre' es obligatorio y 'precio' debe ser un número");
        return;
    }
    fetch('http://localhost:3000/productos', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(nuevoProducto)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo crear el producto");
            }
            return response.json();
        })
        .then(data => {
            console.log("Producto creado exitosamente", data);
        })
        .catch(error => {
            console.error("Error al crear el producto", error);
        });
}

const productoNuevo = {
    id: 6,
    nombre: "tocador",
    precio: 1200000
};
if (validarProducto(productoNuevo)){
    crearProducto(productoNuevo);   
}

// Actualizar productos con PUT
function actualizarProducto(id, datosActualizados) {
    fetch(`http://localhost:3000/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datosActualizados)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo actualizar el producto");
            }
            return response.json();
        })
        .then(data => {
            console.log(`Producto con ID ${id} actualizado correctamente:`);
            console.log(data);
        })
        .catch(error => {
            console.error("Error al actualizar el producto:", error);
        });
}

// Actualizar producto con ID 2
const datosActualizados = {
    id: 2,
    nombre: "mueble nube",
    precio: 2200000
};
actualizarProducto(2, datosActualizados);

// Borrar productos con DELETE
function eliminarProducto(id) {
    fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE"
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo eliminar el producto");
            }
            console.log(`🗑️ Producto con ID ${id} eliminado exitosamente`);
        })
        .catch(error => {
            console.error("Error al eliminar el producto:", error);
        });
}
eliminarProducto("3");

// Validar errores
function validarProducto(producto) {
    if (!producto.nombre || typeof producto.precio !== "number") {
        console.error("Datos del producto no válidos.");
        return false;
    }
    return true;
}
