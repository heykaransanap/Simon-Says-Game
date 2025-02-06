let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;

//accessing h2 document with the help of js
let h2=document.querySelector("h2");

//STARTING STAGE OF GAME WHERE GAME WAS START AFTER PRESSING ANY KEY FROM KEYBOARD AND IT GOES ON LEVELUP(); FUNCTION
document.addEventListener("keypress", function(){
    if (started==false) {
        console.log("Game is started.");
        started=true;

        levelUp();
    }
});

//THIS FUNCTION IS USED TO ADD FLASH CLASS AFTER GENRATING THE RANDOM COLOR BY SYSTEM
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

//THIS FUNCTION IS USED TO GENRATE RANDOM COLOR(NO.)
function levelUp() {
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    
    gameFlash(randBtn);
}

//THIS FUNCTION IS USED TO ADD USERFLASH STYLE CLASS TO FLASH BUTTON AFTER USER CLICK
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

//THIS FUNCTION IS USED TO GET BUTTON BY ITS ATTRIBUTE
function btnPress(){
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}


let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}

//THIS FUNCTION IS USED TO CHECK OUR ANS WAS RIGHT OR WRONG
function checkAns(idx) {
    if (userSeq[idx]===gameSeq[idx]) {
        if (userSeq.length==gameSeq.length) {
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your score was <u>${level}</u><br> Press any key to restart the game.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
//THIS FUNCTION IS USED TO RESET THE GAME FROM STARTING
function reset() {
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}