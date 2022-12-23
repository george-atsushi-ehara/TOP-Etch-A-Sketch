const body = document.body;
const etchContainer = document.getElementById("etchcontainer");
const gridSize = document.getElementById("gridSize");
const createGrid = document.getElementById("createGrid");

//prevent value over 100
createGrid.addEventListener("click", function () {
  etchContainer.innerHTML = "";
  if (gridSize.value > 100) {
    return;
  }
  for (let i = 0; i < gridSize.value ** 2; i++) {
    const div = document.createElement("div");
    const pixelSize = 800 / gridSize.value; // Need .value see Screenshot from 2022-12-23 14-30-41.png
    div.style.width = `${pixelSize}px`;
    div.style.height = `${pixelSize}px`;
    div.style.backgroundColor = "white";
    div.style.display = "inline-block";
    div.addEventListener("mouseover", function () {
      div.style.backgroundColor = "black";
    });
    etchContainer.appendChild(div);
  }
});
