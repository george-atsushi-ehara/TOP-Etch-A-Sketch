const body = document.body;
const etchContainer = document.getElementById("etchcontainer");
const gridSize = document.getElementById("gridSize");
const createGrid = document.getElementById("createGrid");

// make each pixelBox 50px
for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.style.width = "50px";
  div.style.height = "50px";
  div.style.backgroundColor = "white";
  div.style.display = "inline-block";
  div.addEventListener("mouseover", function () {
    div.style.backgroundColor = "black";
  });
  etchContainer.appendChild(div);
}
