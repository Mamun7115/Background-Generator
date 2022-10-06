var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8]
console.log("answer:",_.without(array,3))

const body = document.querySelector('body')
const first = document.querySelector('.first').value;
const second = document.querySelector('.second').value;

body.style.backgroundImage =`linear-gradient(to right,${first},${second})`;
console.log(first)