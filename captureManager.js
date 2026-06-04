function checkCapture(movingToken) {

    if (
        movingToken.pathIndex === -1 ||
        movingToken.homeIndex >= 0
    ) {
        return;
    }

    // SAFE ZONE PROTECTION

    if (
        SAFE_ZONES.includes(
            movingToken.pathIndex
        )
    ) {
        return;
    }

    window.tokens.forEach(token => {

        if (token === movingToken) {
            return;
        }

        if (
            token.color === movingToken.color
        ) {
            return;
        }

        if (
            token.pathIndex ===
            movingToken.pathIndex
        ) {

            token.pathIndex = -1;
            token.steps = 0;
            token.homeIndex = -1;
            token.finished = false;

            alert(
                movingToken.color
                    .toUpperCase() +
                " captured " +
                token.color
                    .toUpperCase()
            );

            renderTokens();
        }
    });
}