const diceSound =
new Audio("sounds/dice.mp3");

const captureSound =
new Audio("sounds/capture.mp3");

const finishSound =
new Audio("sounds/finish.mp3");

const winSound =
new Audio("sounds/win.mp3");

function playDiceSound(){

    diceSound.currentTime = 0;
    diceSound.play();
}

function playCaptureSound(){

    captureSound.currentTime = 0;
    captureSound.play();
}

function playFinishSound(){

    finishSound.currentTime = 0;
    finishSound.play();
}

function playWinSound(){

    winSound.currentTime = 0;
    winSound.play();
}