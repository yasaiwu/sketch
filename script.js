const main = document.querySelector("main");
const reset = document.querySelector("#reset");

/*
extra: instead of black, fill with random color and on subsequent passes darken by 10%
*/

generateGrid(16);


function generateGrid(size) {
  const cells = size * size;
  const html = "<div></div>".repeat(cells);
  main.innerHTML = html;
  const root = document.documentElement;
  root.style.setProperty("--grid-size", size);
}


main.addEventListener("mouseover", (e) => {
  if (e.target.tagName !== "DIV") return;
  console.log(e.target);
  e.target.style.backgroundColor = "black";
});

reset.addEventListener("click", (e) => {
  const input = Number(prompt("Choose Grid Size", "16"));
  const size = Number(input) || 16;
  generateGrid(size);
});

function chooseRandomColor() {

}
