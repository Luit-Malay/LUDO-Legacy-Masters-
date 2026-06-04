function moveSelectedToken(dice) {

    if (window.gameOver) {
        return;
    }

    const token =
    window.tokens[
        window.selectedToken
    ];

    if (!token) return;

    if (token.finished) {
        return;
    }

    // Auto-select current player's token

    if (token.color !== currentPlayer) {

        const playerToken =
        window.tokens.findIndex(
            t =>
            t.color === currentPlayer &&
            !t.finished
        );

        if (playerToken !== -1) {

            window.selectedToken =
            playerToken;
        }

        moveSelectedToken(dice);
        return;
    }

    // Release token

    if (token.pathIndex === -1) {

        if (dice === 6) {

            token.pathIndex =
            window.START_POSITIONS[
                token.color
            ];

            token.steps = 0;

            renderTokens();

            checkCapture(token);

            return;
        }

        nextTurn();
        return;
    }

    // Already inside home lane

    if (token.homeIndex >= 0) {

        const nextHome =
        token.homeIndex + dice;

        if (nextHome > 5) {

            nextTurn();
            return;
        }

        token.homeIndex =
        nextHome;

        if (token.homeIndex === 5) {

            token.finished = true;

            alert(
                token.color.toUpperCase() +
                " token finished!"
            );

            checkWinner(
                token.color
            );
        }

        renderTokens();

        if (dice !== 6) {

            nextTurn();
        }

        return;
    }

    // Check entry into home lane

    const entry =
    HOME_ENTRY[token.color];

    const distanceToEntry =
    (
        entry -
        token.pathIndex +
        MAIN_PATH.length
    ) % MAIN_PATH.length;

    if (
        token.steps < 51 &&
        token.steps + dice >= 51
    ) {

        const homeMove =
        token.steps + dice - 51;

        if (homeMove > 5) {

            nextTurn();
            return;
        }

        token.homeIndex =
        homeMove;

        token.steps += dice;

        if (token.homeIndex === 5) {

            token.finished = true;

            alert(
                token.color.toUpperCase() +
                " token finished!"
            );

            checkWinner(
                token.color
            );
        }

        renderTokens();

        if (dice !== 6) {

            nextTurn();
        }

        return;
    }

    // Normal path movement

    token.pathIndex =
    (
        token.pathIndex + dice
    ) % MAIN_PATH.length;

    token.steps += dice;

    renderTokens();

    checkCapture(token);

    if (dice !== 6) {

        nextTurn();
    }
}