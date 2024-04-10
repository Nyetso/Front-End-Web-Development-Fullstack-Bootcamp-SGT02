// DOM Manipulation
/*
    (DOM) - Document Object Model
    - structure of our code

    DOM Manipulation - Adding/Creatin, Updating
    Track for User Events
*/

// Targetting DOM Elements
/*
    OLD WAYS
    
    document.getElementById("todo-input") = 1 element
    getElementsByClassName("todo-input") = list of elements
    getElementsByTagName ("option") = list of elements


const todoInput = document.getElementsByClassName
("todo-input");
console.log(todoInput);

const optionsList = document.getElementsByTagName("option");
console.log(optionsList);*/

/*
    MODERN WAY

    querySelector("todo-input"), querySelector("select") = first occurence of the target
    querySelectorAll("todo-input"), querySelectorAll("select")
*/

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");


// Track user Events/Interactions
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteOrCompleteTodo);
filterOption.addEventListener("click", filterTodo);


// Add a to-do - (e) is short for event
/*
    Create Element
    Give it classes (if applicable)
    Append to the document
*/
function addTodo(e) {
    //preventDefault from refreshing
    e.preventDefault(); 
    console.log(e.target);
    console.log(e.type);

    // create an element to add to our DOM/HTML
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // add task name to the todoDiv
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;

    // Add newTodo to the div
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value = "";

    //create completed button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // add it to an existing element on the page
    todoList.appendChild(todoDiv);
}


// Delete or Complete to-do
function deleteOrCompleteTodo(e) {
    const item = e.target;
    // console.log(item.classList[0]);

    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.add("fall");

        todo.addEventListener("transitionend", function () {
            todo.remove();
        })
        
    }
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        // add if not existing, remove if existing (like an off on switch)
        todo.classList.toggle("completed");
    }
}


// Filter to-dos
function filterTodo () {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}