let currentPlayer = "red";

function nextTurn() {

    if (currentPlayer === "red") {
        currentPlayer = "green";
    }
    else if (currentPlayer === "green") {
        currentPlayer = "yellow";
    }
    else if (currentPlayer === "yellow") {
        currentPlayer = "blue";
    }
    else {
        currentPlayer = "red";
    }

    const tokenIndex = window.tokens.findIndex(
        token => token.color === currentPlayer
    );

    if (tokenIndex !== -1) {
        window.selectedToken = tokenIndex;
    }

    updateCurrentPlayerUI();
}

updateCurrentPlayerUI();