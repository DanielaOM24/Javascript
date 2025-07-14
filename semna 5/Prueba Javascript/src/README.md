# 🌐 SPA de Usuarios, Login y Reservas

Este proyecto es una **Single Page Application (SPA)** desarrollada con **JavaScript Vanilla**, enfocada en la navegación dinámica, registro de usuarios, inicio de sesión y gestión de reservas. Utiliza `localStorage` para el manejo de sesiones y `JSON Server` como backend simulado para almacenar datos de forma persistente.

---

##  Funcionalidades implementadas

###  Navegación SPA
- Navegación entre páginas sin recargar el navegador.
- Se utilizan rutas definidas manualmente en un objeto `routes`.
- Se hace uso de `fetch()` y `history.pushState()` para cargar contenidos dinámicos.

###  Registro de usuarios
- Formulario para registrar nuevos usuarios con nombre, correo y contraseña.
- Los datos se envían al servidor simulado (`JSON Server`).
- Cada nuevo usuario tiene rol predeterminado `"usuario"`.

###  Inicio de sesión (Login)
- Validación de credenciales contra los datos del servidor.
- Al iniciar sesión, se guarda en `localStorage` que el usuario está autenticado.
- Redirección automática a la página de inicio.

###  Control dinámico de botones
- Los botones de login, registro o reserva se ocultan o muestran según el estado de sesión del usuario.
- Se verifica la clave `userAccess` en `localStorage`.

###  Formulario de reserva (estructura base)
- Formulario preparado para recoger nombre, correo, fecha y hora.
- Los datos se procesan localmente y están listos para ser enviados al servidor.

---

##  Tecnologías utilizadas

- **JavaScript (Vanilla)**
- **HTML5**
- **JSON Server** (para simular una API REST)
- **LocalStorage** (gestión de sesión)

---

##  Estructura de rutas

El sistema carga dinámicamente los siguientes archivos HTML:

```js
const routes = {
  "/": "./pages/home.html",
  "/inicio": "./pages/inicio.html",
  "/login": "./pages/login.html",
  "/register": "./pages/register.html",
  "/events": "./pages/events.html"
};



