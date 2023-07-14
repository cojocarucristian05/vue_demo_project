import { useAttrs } from "vue";

function loadData() {
    const data = [];
    data.push(createNewTodoItem("Buy eggs"));
    data.push(createNewTodoItem("Do the dishes", true));
    return data;
}

async function loadExternalData() {
    const response = await fetch('https://dummyjson.com/todos?limit=5');
    const json = await response.json();
    const todos = json.todos;
    const data = [];
    todos.forEach(element => {
        const item = createNewTodoItem(element.todo, element.completed);
        data.push(item);
    });
    return data;
}

function createNewTodoItem(itemText, itemCompleted) {
    return {
        id:        _generateNextId(),
        title:     itemText,
        completed: itemCompleted
    }
}

function _generateNextId() {
    window.nextId = window.nextId ? window.nextId + 1 : 1;
    return window.nextId;
}

async function addTodoPost() {
    const response = await fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            todo: 'asddd', 
            completed: false,
            userId: 5
        })
    });
    const todo = await response.json();
    const item = createNewTodoItem(todo.todo, todo.completed);
    return item;
}

async function updateTodoUpdate() {
    /* updating completed status of todo with id 1 */
    const response = fetch('https://dummyjson.com/todos/1', {
        method: 'PUT', /* or PATCH */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            todo: 'updated todo',
            completed: false,
            userId: 10
        })
    });
    const todo = await response.json();
    const item = createNewTodoItem(todo.todo, todo.completed);
    return item;
}


export {loadData, createNewTodoItem, loadExternalData, addTodoPost, updateTodoUpdate}