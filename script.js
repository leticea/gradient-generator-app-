const colorOne = document.getElementById("color-a");
const colorTwo = document.getElementById("color-b");
const outputCode = document.getElementById("code");
const currentDirection = "to bottom";

function setDirection(value, _this) {
  let directions = document.querySelectorAll(".buttons button");
  for (let i of directions) {
    i.classList.remove("active");
  }

  _this.classList.add("active");
  currentDirection = value;
}
