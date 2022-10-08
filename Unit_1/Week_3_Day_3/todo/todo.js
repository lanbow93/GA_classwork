// Object to hold application data
const data = {
  todos: ["Breakfast", "Lunch"],
};

// Object to hold main dom nodes
const $nodes = {
  div: $("div.todos"),
  form: $("form"),
  textInput: $("input[type='text']"),
};

// Save the todos into local storage
function saveTodos(){
    // Turn the data object into a JSON 
    const json = JSON.stringify(data)
    // Save the string in local storage
    localStorage.setItem("todoList", json);
    console.log(json);
}

// function for loaded todo from local storage
function loadTodos(){
    //get data from localStorage
    const json = localStorage.getItem("todoList")
    // update data, if json isn't undefined/falsey
    if(json){
        const savedData = JSON.parse(json)
        // update data with the saved array
        data.todos = savedData.todos
    }
}
// Function that renders todos to the div
function renderTodos() {
    $nodes.div.empty(); // Empties the old one before adding everything plus the new item


    //render each todo
    for (let todo of data.todos) {
    const $todoDiv = $("<div>").addClass("todo");
    $todoDiv.text(todo);
    $nodes.div.append($todoDiv);
        
    // add click event to remove todo
    $todoDiv.on("click", function(event){
        // Get the text of the thing
        const text = $(event.target).text();
        const index = data.todos.indexOf(text);
        data.todos.splice(index, 1);
        renderTodos()
    }) 
    
    }
    saveTodos()
}

// Function for adding todos
function addTodo(newTodo) {
    data.todos.push(newTodo)
    renderTodos();
}
$nodes.form.on("submit", function(event) {
    event.preventDefault(); // Prevents page refresh
    addTodo($nodes.textInput.val()) // Calls addTodo function and passes the input in the text box as an argument
    $nodes.textInput.val(""); // Clears the textbox
})

loadTodos()
renderTodos();
