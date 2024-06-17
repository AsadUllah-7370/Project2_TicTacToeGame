let audioTurn = new Audio("ting.mp3")
let turnPlayer = "X"
let gameOver = false

const changeTurn = () => {
    return turnPlayer === "X" ? "0" : "X"
}

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
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
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            gameOver = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            const container = document.getElementById('containerBox')
            const children = container.children;
            const child0 = children[e[0]];
            const child1 = children[e[1]];
            const child2 = children[e[2]];
            child0.style.backgroundColor = "yellow"
            child1.style.backgroundColor = "yellow"
            child2.style.backgroundColor = "yellow"
        }
        else if (!gameOver) {
            let allFilled = true;
            for (let i = 0; i < boxtext.length; i++) {
                if (boxtext[i].innerText === "") {
                    allFilled = false;
                    break;
                }
            }
            if (allFilled) {
                document.querySelector('.info').innerText = "Match Drawn";
                gameOver = true;
            }
        }

    })
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
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });

    turnPlayer = "X";
    gameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turnPlayer;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";

    let boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach((element) => {
        element.style.backgroundColor = "";
    });
});

