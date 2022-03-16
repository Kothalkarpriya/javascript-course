const button = document.querySelector("button");
const text = document.querySelector("p");

button.addEventListener("click", updateBtn);

function updateBtn() {
  if (button.textContent === "Start machine") {
    button.textContent = "Stop machine";
    text.textContent = "The machine has started!";
  } else {
    button.textContent = "Start machine";
    text.textContent = "The machine is stopped.";
  }
}