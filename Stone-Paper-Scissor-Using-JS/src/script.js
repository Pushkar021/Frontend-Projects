let crtmyscore = 0;
let crtcompscore = 0;
let clicked = document.querySelectorAll(".choice");
clicked.forEach((choice) => {
  choice.addEventListener("click", () => {
    userchoice = choice.getAttribute("id");
    console.log("you choose:", userchoice);
    x();
    update(myscore, compscore);
  });
});
function x() {
  let a = ["stone", "paper", "scissor"];
  let y = Math.floor(Math.random() * 3);
  compchoice = a.at(y);
  console.log(`computer choose:${compchoice}`);
}
function update(myscore, compscore) {
  let process = document.querySelector(".process");
  if (userchoice == "stone" && compchoice == "paper") {
    crtcompscore += 1;
    process.innerText = "COMPUTER WON! PAPER BEATS YOUR STONE";

  }
  if (userchoice == "stone" && compchoice == "scissor") {
    crtmyscore += 1;
    process.innerText = "USER WON! YOUR STONE BEATS SCISSOR";
  }
  if (userchoice == "paper" && compchoice == "scissor") {
    crtcompscore++;
    process.innerText = "COMPUTER WON! SCISSOR BEATS YOUR PAPER";
  }
  if (userchoice == "paper" && compchoice == "stone") {
    crtmyscore++;
    process.innerText = "USER WON! YOUR PAPER BEATS STONE";
  }
  if (userchoice == "scissor" && compchoice == "stone") {
    crtcompscore++;
    process.innerText = "COMPUTER WON! STONE BEATS YOUR SCISSOR";
  }
  if (userchoice == "scissor" && compchoice == "paper") {
    crtmyscore++;
    process.innerText = "USER WON! YOUR SCISSOR BEATS PAPER";
  }
  if (userchoice == "scissor" && compchoice == "scissor") {
    console.log("Match Draw");
    process.innerText = "MATCH DRAW!";
  }
  if (userchoice == "stone" && compchoice == "stone") {
    console.log("Match Draw");
    process.innerText = "MATCH DRAW!";
  }
  if (userchoice == "paper" && compchoice == "paper") {
    console.log("Match Draw");
    process.innerText = "MATCH DRAW!";
  }
  console.log(`myscore ${crtmyscore}`);
  console.log(`computer_score ${crtcompscore}`);
  let xxx = document.querySelector("#myscore");
  let x69 = document.querySelector("#compscore");
  xxx.innerText = crtmyscore;
  x69.innerText = crtcompscore;
}
