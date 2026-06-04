function rollDice() {

    if (window.gameOver) {
        return;
    }

    const dice =
    Math.floor(
        Math.random() * 6
    ) + 1;

    const diceElement =
    document.getElementById(
        "dice-value"
    );

    if (diceElement) {

        diceElement.innerText =
        "Dice: " + dice;
    }

    moveSelectedToken(
        dice
    );
}

window.addEventListener(
    "load",
    () => {

        const btn =
        document.getElementById(
            "roll-btn"
        );

        if (!btn) return;

        btn.addEventListener(
            "click",
            rollDice
        );
    }
);