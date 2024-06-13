let audioTurn = new Audio("ting.mp3")
let turnPlayer = "X"
let gameOver = false

const changeTurn = () => {
    return turnPlayer === "X" ? "0" : "X"
}

const checkWin = () => {
    let boxText = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && (boxText[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " Won"
            gameOver = true
            document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "200px"
        }
    });

}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxText = element.querySelector(".boxtext")
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turnPlayer
            turnPlayer = changeTurn()
            audioTurn.play()
            checkWin()
            if (!gameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turnPlayer
            }
        }

    }
    )

}
)

let reset = document.getElementById("reset")
reset.addEventListener('click', () => {
    location.reload();
}
)
