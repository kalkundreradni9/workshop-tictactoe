let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");

let mdg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msgContainer");

let count = 0;
let turnX = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],

];
boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log(count);
        if (turnX){
            box.innerHTML = "X";
            turnX = false;
        } else{
            box.innerHTML = "O";
            turnX = true;
        }
        
        if(count == 8){
            msg.innerHTML = "Draw";
            msgContainer.classList.remove("hide")
            resetBtn.innerText = "New Game";
        }
        count += 1;

        box.disabled = true;
        checkWinner();
    });

    const resetGame = () => {
        turnX = true;
        count = 0;
        enableBtn();
        resetBtn.innerText = "Reset Game";
    };

    const enableBtn = () =>{
        for(box of boxes){
            box.disabled = false;
            box.innerText = "";
            msgContainer.classList.add("hide")
        }
    }

    const showWinner = (winner,end) => {
        msg.innerText = `${winner} Won`;
        msgContainer.classList.remove("hide");
        disableBtn();
    };

    const disableBtn = () => {
        for(box of boxes){
            box.disabled = true;
        }
    };

    const checkWinner = () => {
        for(let pattern of winPattern){
            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;
            if (pos1 != "" && pos2 != "" && pos3 != "")
                if(pos1 == pos2 && pos2 == pos3){
                    console.log(pos1);
                    showWinner(pos1, count);
                }
        }
    };
    resetBtn.addEventListener("click", resetGame);
});

