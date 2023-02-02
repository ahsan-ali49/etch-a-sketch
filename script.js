const body = document.querySelector("body");

const container = document.createElement("div");
container.className = "main-container";

let order;
let numOfCells;

do {
  order = prompt("Enter cell's order(<101): ");
  numOfCells = order * order;
} while (order > 100);

let gridDiv;
// gridDiv.className = "grid-div";

for (let i = 0; i < numOfCells; i++) {
  gridDiv = document.createElement("div");
  gridDiv.className = "grid-div";
  const widh = 400 / order;
  gridDiv.style.width = `${widh}px`;
  container.appendChild(gridDiv);
}

body.appendChild(container);

const gribular = document.querySelectorAll(".grid-div");

// addEventListener("mouseenter")

gribular.forEach((grib) => {
  grib.addEventListener("mouseenter", () => {
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
    grib.style.backgroundColor = `${
      colors[Math.floor(Math.random() * colors.length)]
    }`;
  });
});
