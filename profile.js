const colorButton = document.querySelector('#color')

colorButton.addEventListener('click', (e) => {
    alert('My favorite color is blue')
});

const placeButton = document.querySelector('#place')

placeButton.addEventListener('click', (e) => {
    alert('My favorite place is my home.')
});

const ritualButton = document.querySelector('#ritual')

ritualButton.addEventListener('click', (e) => {
    alert('My favorite ritual is my morning coffee with my wife.')
})





//I wrote the below code because I misread the instructions for styling the buttons. I thought you wanted us to style them however we wanted so I made them change to random colors with the below function. I kept it in here commented out becasue I thought it was cool.

// const randColor = () => {
//     r = Math.floor(Math.random() * 255);
//     g = Math.floor(Math.random() * 255);
//     b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`;
// }

// const faveButtons = document.querySelectorAll('.buttons')

// for (let button of faveButtons) {
//     button.addEventListener('mouseover', () => {
//         const newColor = randColor()
//         button.style.backgroundColor = newColor;
//     })

// }


