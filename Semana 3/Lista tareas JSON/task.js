const form = document.getElementById("form");
const inputTitle = document.getElementById("title");
const inputDescription = document.getElementById("description");
const tasksdiv = document.getElementById("lista-tareas");

let tasks = [];

formu.addEventListener('submit', async function(event) {
    event.preventDefault();

    const title = inputTitle.value.trim();
    const description = inputDescription.value.trim();
    if (title === '' || description === '') return

    const task = {
        title,
        description,
        completed: false
    }

    await fetch ('http://localhost:3000/task', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(task)
    });

    inputTitle.value = '';
    
})



