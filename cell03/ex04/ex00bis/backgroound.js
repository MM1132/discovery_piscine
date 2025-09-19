
$("#color-button").click(() => {
	let r = Math.random() * 255;
	let g = Math.random() * 255;
	let b = Math.random() * 255;
	$("body").css("background-color", `rgb(${r}, ${g}, ${b})`)
});

// let colorButton = document.getElementById("color-button");
// let body = document.body;



// colorButton.addEventListener("click", () => {
// 	const getHexLetter = () => {
// 		const letters = "0123456789abcdef";
// 		return letters[Math.floor(Math.random() * 16)];
// 	}

// 	let randomColor = "#";
// 	for (let i = 0; i < 6; i++)
// 		randomColor += getHexLetter();

// 	console.log(randomColor);

// 	body.style.backgroundColor = randomColor;
// });
