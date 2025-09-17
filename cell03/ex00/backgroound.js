
let colorButton = document.getElementById("color-button");
let body = document.body;

colorButton.addEventListener("click", () => {
	const getHexLetter = () => {
		const letters = "0123456789abcdef";
		return letters[Math.floor(Math.random() * 16)];
	}

	let randomColor = "#";
	for (let i = 0; i < 6; i++)
		randomColor += getHexLetter();

	console.log(randomColor);

	body.style.backgroundColor = randomColor;
});
