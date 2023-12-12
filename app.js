let boxes = document.querySelectorAll(".box");
let newgamebtn = document.querySelector("#newgame-btn");
let resetBtn = document.querySelector("#reset-btn");

let msgcontainer = document.querySelector("#msg-container");
let msg = document.querySelector("#msg");

let turn = true; //playerX & playerO
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box is clicked");
    if (turn) {
      //playerX
      box.innerText = "X";
      turn = false;
    } else {
      //playerO
      box.innerText = "O";
      turn = true;
    }
    box.disabled = true;

    checkWinner();
  });
});
const disableBoxes = () =>{
    for(let box of boxes){
    box.disabled = true;
}
}
 
const showWinner = (winner) => {
  msg.innerText = `Congrulations, Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let patterns of winPatterns) {
    // console.log(patterns[0],patterns[1],patterns[2]);
    // console.log(boxes[patterns[0]].innerText,
    //             boxes[patterns[1]].innerText,
    //             boxes[patterns[2]].innerText);

    let pos1val = boxes[patterns[0]].innerText;
    let pos2val = boxes[patterns[1]].innerText;
    let pos3val = boxes[patterns[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        // console.log("winner", pos1val);
        showWinner(pos1val);
        
      }
    }
  }
};

