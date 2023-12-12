let myButton = document.getElementById('button1');


function handleClick() {
    console.log('The button has been clicked'); 
let myHeading = document.getElementById('page-heading');
console.log('Before:', myHeading.textContent); 
myHeading.textContent = 'Now I am Dynamic!!!';
console.log('After:', myHeading.textContent); 
myHeading.style.backgroundColor = '#586e75';
}

myButton.addEventListener('click', handleClick);