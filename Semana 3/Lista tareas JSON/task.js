
// Selección de elementos del DOM
const form = document.getElementById('task-form'); // Formulario para agregar tareas
const inputTitle = document.getElementById('title'); // Input para el título de la tarea
const inputDescription = document.getElementById('description'); // Input para la descripción
const taskContainer = document.getElementById('task-list'); // Contenedor donde se muestran las tareas

// Array para almacenar las tareas
let tasks = [];

// Evento para manejar el envío del formulario y agregar una nueva tarea
form.addEventListener('submit', async function (event) {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario

    const title = inputTitle.value.trim(); // Obtiene y limpia el título
    const description = inputDescription.value.trim(); // Obtiene y limpia la descripción
    if (title === '' || description === '') return; // Valida que ambos campos estén completos

    // Crea el objeto tarea
    const task = {
        title,
        description,
        completed: false
    };

    // Envía la tarea al backend (POST)
    await fetch('http://localhost:3000/task', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
    });

    // Limpia los campos del formulario
    inputTitle.value = '';
    inputDescription.value = '';
    fetchTasks(); // Actualiza la lista de tareas
});

// Función para obtener las tareas del backend (GET)
async function fetchTasks() {
    const res = await fetch('http://localhost:3000/task');
    tasks = await res.json();
    renderTasks(); // Renderiza las tareas en el DOM
}

// Función para mostrar las tareas en pantalla
function renderTasks() {
    taskContainer.innerHTML = '';

    tasks.forEach((task) => {
        const div = document.createElement('div');
        div.className = 'task';

        // Estructura HTML de cada tarea
        div.innerHTML = `
    <strong>${task.title}</strong><br>
        <em>${task.description}</em>
        `;

        // Si la tarea está completada, cambia el estilo
        if (task.completed) {
            div.style.textDecoration = 'line-through';
            div.style.color = 'green';
        }

        // Botón para marcar como completada
        const btnComplete = document.createElement('button');
        btnComplete.textContent = 'Mark as done';
        btnComplete.addEventListener('click', async () => {
            task.completed = true;
            await fetch(`http://localhost:3000/task/${task.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(task)
            });
            fetchTasks();
        });

        // Botón para eliminar la tarea
        const btnDelete = document.createElement('button');
        btnDelete.textContent = 'Delete';
        btnDelete.style.marginLeft = '10px';
        btnDelete.addEventListener('click', async () => {
            await fetch(`http://localhost:3000/task/${task.id}`, {
                method: 'DELETE'
            });
            fetchTasks();
        });

        // Agrega los botones al div de la tarea
        div.appendChild(btnComplete);
        div.appendChild(btnDelete);
        taskContainer.appendChild(div);
    });
}

// Llama a la función para cargar las tareas al iniciar
fetchTasks();