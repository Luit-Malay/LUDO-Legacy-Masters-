function checkWinner(color){

    const playerTokens =
    window.tokens.filter(
        token => token.color === color
    );

    const finishedCount =
    playerTokens.filter(
        token => token.finished
    ).length;

    if(finishedCount === 4){

        alert(
            "🏆 " +
            color.toUpperCase() +
            " WINS THE GAME!"
        );

        const button =
        document.getElementById(
            "roll-btn"
        );

        if(button){

            button.disabled = true;
        }

        window.gameOver = true;
    }
}