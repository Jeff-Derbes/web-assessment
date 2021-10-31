console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();

	alert('Form has been submitted');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let image = document.querySelector('img');

image.addEventListener('mouseover', (e) => alert('Nice shoes!'));