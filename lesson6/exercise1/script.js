const btn = document.querySelector('button');

function greet() {
  const name = prompt('What is your name?');
  alert(`Hello ${name}, nice to see you!`);
}

btn.addEventListener('click', greet);