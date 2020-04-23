
Save New Duplicate & Edit Just Text
"use strict"
{
const pin = 123
let enterCode = '';

document.querySelector('.numbers').addEventListener('click', (event) => {
	if (!event.target.className.includes('button'))return;
	const clickedNumber = event.target.innerText;
	
	console.log(clickedNumber)
	
	enterCode = enterCode + clickedNumber
	let lengthCode = enterCode.length
	lengthCode--
	document.querySelector(`.fields .c${lengthCode} .numberfield`).classList.add('active')
	document.querySelector('.text').innerHTML = `<strong>Il faut entrer un code...</strong>`
	if (lengthCode == 2) {
		// Check if the code is correct
		if (enterCode == pin) {

		// If the code is correct, do this :
		document.querySelector(`.fields .c${lengthCode} .numberfield`).classList.add('active')
		document.querySelector('.numbers').classList.add('hide')
		document.querySelector('.text').innerHTML = `<strong>Bravo ! Vous avez entré le bon code !</strong>`
		} 
		else {
		// If the code entered is wrong
		enterCode = '';
		document.querySelector('.fields').classList.add('miss')
		document.querySelector(`.fields .c${lengthCode} .numberfield`).classList.remove('right')
		document.querySelector(`.fields .c0 .numberfield`).classList.remove('active')
		document.querySelector(`.fields .c1 .numberfield`).classList.remove('active')
		document.querySelector(`.fields .c2 .numberfield`).classList.remove('active')
		document.querySelector('.numbers').classList.remove('hide')
		document.querySelector('.text').innerHTML = `<strong>Vous n'avez pas trouvé le bon code... !</strong>`

		setTimeout(function () {
			document.querySelector(`.fields .c${lengthCode} .numberfield`).classList.remove('active')
			}, 200)
			setTimeout(function () {
			document.querySelector('.fields').classList.remove('miss')
			}, 500)
		}
	} 

});

}