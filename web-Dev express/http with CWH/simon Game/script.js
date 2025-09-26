
// array for track user and gmae seq
let gamesq = []
let usrsq = []
let btns = ["green", "red", "blue", "skin"]

let score=[]
let highSCore=0;
let level = 0
let started = false;
let h3 = document.querySelector("h3")

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("key pressed")
        started = true;

        levelUp();
    }
})

function levelUp() {
    usrsq = [];
    level++
    
    h3.innerText = ` Level ${level}`;

    randIndx = Math.floor(Math.random() * 4)
    randColr = btns[randIndx]
    randbtn = document.querySelector(`.${randColr}`)
    gamesq.push(randColr)
    console.log(gamesq)

    flash(randbtn)
}
function flash(btn) {
    btn.classList.add("flash")
    setTimeout(() => {
        btn.classList.remove("flash")
    }, 250);
}
function userflash(btn) {
    btn.classList.add("userflash")
    setTimeout(() => {
        btn.classList.remove("userflash")
    }, 250);
}

function checkAns(idx) {

    if (usrsq[idx] === gamesq[idx]) {
        if (usrsq.length == gamesq.length) {
            setTimeout(levelUp, 1000)
        }
    } else {
        if (level > highSCore) {
            highSCore = level; // Update high score if the player reached a new best
        }
        let h4=document.querySelector("h4")
        h4.innerText=`High Score ${highSCore}`
        h3.innerHTML = `Game Over!| Press any key to try again.| <br> <b>Level ${level}</b> | `;
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "gray"
        }, 150)
        reset()
    }
}

function btnPres() {
    let btn = this;
    userflash(btn)
    usrColor = btn.getAttribute("id")
    usrsq.push(usrColor)
    checkAns(usrsq.length - 1)
}

let allbtns = document.querySelectorAll(".box")
for (btn of allbtns) {
    btn.addEventListener("click", btnPres)
}

function reset() {
    started = false;
    gamesq = [];
    usrsq = []
    level = 0
}