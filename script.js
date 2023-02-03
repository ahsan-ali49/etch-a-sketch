function getCellNumber() {
  let order;

  do {
    order = prompt("Enter cell's order(<101): ");
  } while (order > 100 || order == null);
  return order;
}

function createDiv(order) {
  let gridDiv;
  let numOfCells = order * order;
  for (let i = 0; i < numOfCells; i++) {
    gridDiv = document.createElement("div");
    gridDiv.className = "grid-cell";
    const widh = 400 / order;
    gridDiv.style.width = `${widh}px`;
    container.appendChild(gridDiv);
  }
}

function initPage() {
  let order = getCellNumber();

  createDiv(order);

  body.appendChild(container);

  const gridCells = document.querySelectorAll(".grid-cell");

  gridCells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
      const colors = [
        "black",
        "silver",
        "gray",
        "maroon",
        "red",
        "purple",
        "fuchsia",
        "green",
        "lime",
        "olive",
        "yellow",
        "navy",
        "blue",
        "teal",
        "aqua",
      ];
      cell.style.backgroundColor = `${
        colors[Math.floor(Math.random() * colors.length)]
      }`;
    });
  });
}

const body = document.querySelector("body");

const container = document.createElement("div");
container.className = "main-container";

const promptBtn = document.querySelector(".promptBtn");

promptBtn.addEventListener("click", initPage);
