
const body = document.querySelector('body')
const first = document.querySelector('.first').value;
const second = document.querySelector('.second').value;

body.style.backgroundImage =`linear-gradient(to right,${first},${second})`;
console.log(first)