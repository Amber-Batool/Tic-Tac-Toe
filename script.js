let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset_btn");
let newgamebtn = document.querySelector("#new_btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const win_patterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () => {
    turnO = true;
    enabledboxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color ="#7f5539"
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color ="#7f5539"
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disabledboxes = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
};

const enabledboxes = () => {
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `🎉Congratulations Winner is: ${winner}`;
    msg.style.color ="#7f5539"
    msgcontainer.classList.remove("hide");
    disabledboxes();
};

const checkWinner = () => {
    for (let pattern of win_patterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
            }
        }
    }
};

newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);