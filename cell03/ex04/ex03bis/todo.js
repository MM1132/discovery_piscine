let $todoList = $("#ft_list");

const askToRemoveTheTodo = (event) => {
	let answer = prompt('Do you want to remove this todo? Write "yes" or "no"?');

	if (answer == "yes")
	{
		event.target.remove();

		// Save
		let todos = $todoList.children().map(function() {
			return this.textContent;
		});
		document.cookie = JSON.stringify(todos);
	}
}

const addNewTodoElement = (msg) => {
	$newTodo = $('<div class="todo"></div>').text(msg);
	$newTodo.on("click", askToRemoveTheTodo);
	$todoList.prepend($newTodo);
}

$(document).ready(() => {
	let todos = Array.from(JSON.parse(document.cookie)).reverse();
	todos.forEach(addNewTodoElement);
});


$("#new-todo-button").click(() => {
	let newTodoText = prompt("Enter new todo:");

	if (newTodoText.length < 1)
		return ;

	addNewTodoElement(newTodoText);

	// Save
	let todos = $todoList.children().map(function() {
		return this.textContent;
	});
	document.cookie = JSON.stringify(todos);
});
