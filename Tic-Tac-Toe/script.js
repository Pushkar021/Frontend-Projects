const boxes = document.querySelectorAll(".box");
let firstClick = true;
let p = document.querySelector(".p");
let reset = document.querySelector(".btn");

const winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function main() {
  boxes.forEach((box) => {
    box.addEventListener("click", handleClick);
  });
}

function handleClick(event) {
  const box = event.target;
  if (firstClick) {
    box.innerText = "O";
    firstClick = false;
  } else {
    box.innerText = "X";
    firstClick = true;
  }

  box.disabled = true;
  check();
}

function check() {
  for (const patterns of winpatterns) {
    let index1 = boxes[patterns[0]].innerText;
    let index2 = boxes[patterns[1]].innerText;
    let index3 = boxes[patterns[2]].innerText;
    if (index1 !== "" && index2 !== "" && index3 !== "") {
      if (index1 === index2 && index2 === index3) {
        p.innerText = `${index1} is winner`;
        p.style.color = "green";
        boxes[patterns[0]].style.color = "green";
        boxes[patterns[1]].style.color = "green";
        boxes[patterns[2]].style.color = "green";
      }
    }
  }
}

function resetGame() {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    box.style.color = ""; 
  });
  p.innerText = "Tic Tac Toe!"; 
  p.style=""
  firstClick = true; 
}

reset.addEventListener("click", resetGame);

main();
