const para = document.querySelector("p");
para.addEventListener("click", nameUpdator);
function nameUpdator() {
  const name = prompt("Enter a new name");
  para.textContent = `Player 1: ${name}`;
}
