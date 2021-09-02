let appContainer = document.getElementById("app-container")
let inputValue = document.getElementById("addTodo");
let addBtn = document.getElementById("AddBtn");
let toDoList =  document.getElementById("toDoList");

function addTodo() {
    let li = document.createElement('li')
    let deletebtn = document.createElement("button")
    deletebtn.innerText = ("-")
    toDoList.append(li);
    li.innerText = inputValue.value;
    li.append(deletebtn);
    deletebtn.addEventListener('click', deleteTodo);

    function deleteTodo() {
        li.remove()
    }

}


addBtn.addEventListener("click", addTodo)

