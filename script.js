const body = document.querySelector("body");

const container = document.createElement("div");
container.className = "main-container";

let order;
let numOfCells;

do {
  order = prompt("Enter cell's order(<101): ");
  numOfCells = order * order;
} while (order > 100);

for (let i = 0; i < numOfCells; i++) {
  const gridDiv = document.createElement("div");
  gridDiv.className = "grid-div";
  const widh = 400 / order;
  gridDiv.style.width = `${widh}px`;
  container.appendChild(gridDiv);
}

body.appendChild(container);
