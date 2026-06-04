function updateCurrentPlayerUI() {

    const element =
    document.getElementById(
        "current-player"
    );

    if (!element) return;

    const finished =
    window.tokens.filter(
        token =>
        token.color === currentPlayer &&
        token.finished
    ).length;

    element.innerText =
    `Current Player: ${currentPlayer.toUpperCase()} | Finished: ${finished}/4`;
}