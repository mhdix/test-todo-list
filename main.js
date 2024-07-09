
const todos = []

const todoInput = document.querySelector('.todo-input')
const todoForm = document.querySelector('.todo-form')
const todoList = document.querySelector('.todo__list')
todoForm.addEventListener('submit', addNewTodo )

function addNewTodo (e) {
    e.preventDefault()
    if(!todoInput.value) return null
    const newTodo = {
        id: Date.now(),
        createdAt:new Date().toISOString(),
        title: todoInput.value,
        isCompleted: false
    }
    todos.push(newTodo)
    // create todos on DOM
    let result = ''
    todos.forEach(todo => {
        console.log(todo);
        result += `<li class="todo">
                        <p class="todo__title">${todo.title}</p>
                        <span class="todo__createdAt">${new Date(todo.createdAt).toLocaleDateString('fa-IR')}</span>
                        <button class="todo__check">CH</button>
                        <button class="todo__remove">RV</button>
                    </li>`;
    })
    todoList.innerHTML = result
    todoInput.value = ''
}

 