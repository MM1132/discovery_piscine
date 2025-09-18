let todoList = document.getElementById("ft_list");
let newTodoButton = document.getElementById("new-todo-button");

const askToRemoveTheTodo = (element) => {
	let answer = prompt('Do you want to remove this todo? Write "yes" or "no"?');

	if (answer == "yes")
	{
		todoList.removeChild(element);
		let todos = Array.from(todoList.childNodes).map(v => v.textContent);
		document.cookie = JSON.stringify(todos);
	}
}

const addNewTodoElement = (msg) => {
	let newTodo = document.createElement("div");
	newTodo.classList.add("todo");
	newTodo.textContent = msg;
	newTodo.addEventListener("click", () => {
		askToRemoveTheTodo(newTodo);
	});
	todoList.insertBefore(newTodo, todoList.firstChild);
}

document.addEventListener("DOMContentLoaded", () => {
	let todos = Array.from(JSON.parse(document.cookie)).reverse();
	todos.forEach(v => {
		addNewTodoElement(v);
	});
});

newTodoButton.addEventListener("click",  () => {
	let newTodoText = prompt("Enter new todo:");

	if (newTodoText.length < 1)
		return ;

	addNewTodoElement(newTodoText);

	// Save
	let todos = Array.from(todoList.childNodes).map(v => v.textContent);
	document.cookie = JSON.stringify(todos);
});
