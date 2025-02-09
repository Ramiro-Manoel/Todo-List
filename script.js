const inputText = document.getElementById("input-text");

function createDeleteButton(){
    const deleteButton = document.createElement("span");
    deleteButton.innerHTML = "&#10006";
    deleteButton.classList.add("delete-button");
    return deleteButton;
}

function addTask(){
    const toDoItem = document.createElement("li");
    toDoItem.innerHTML = inputText.value;
    toDoItem.classList.add("to-do-item");

    toDoItem.appendChild(createDeleteButton());
    document.getElementById("to-do-container").appendChild(toDoItem);

    inputText.value = "";
}