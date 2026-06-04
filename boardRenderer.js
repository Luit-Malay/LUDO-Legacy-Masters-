const board =
document.getElementById("board");

function createBoard() {

    board.innerHTML = "";

    for (let row = 0; row < 15; row++) {

        for (let col = 0; col < 15; col++) {

            const cell =
            document.createElement("div");

            cell.className = "cell";

            cell.id =
            `cell-${row}-${col}`;

            board.appendChild(cell);
        }
    }
}

function renderColoredHomePaths(){

    HOME_PATHS.red.forEach(pos=>{

        document.getElementById(
            `cell-${pos.row}-${pos.col}`
        ).style.background="#ff4040";

    });

    HOME_PATHS.green.forEach(pos=>{

        document.getElementById(
            `cell-${pos.row}-${pos.col}`
        ).style.background="#00d000";

    });

    HOME_PATHS.yellow.forEach(pos=>{

        document.getElementById(
            `cell-${pos.row}-${pos.col}`
        ).style.background="#ffd700";

    });

    HOME_PATHS.blue.forEach(pos=>{

        document.getElementById(
            `cell-${pos.row}-${pos.col}`
        ).style.background="#0090ff";

    });

}



function renderLUITLabels() {

    const labels = [

        {
            row:2,
            col:2,
            letter:"L",
            title:"Legends"
        },

        {
            row:2,
            col:12,
            letter:"T",
            title:"Titans"
        },


{
    row:11,
    col:2,
    letter:"U",
    title:"Ultimates"
},

{
    row:11,
    col:12,
    letter:"I",
    title:"Incredibles"
}
    ];

    labels.forEach(label => {

        const cell =
        document.getElementById(
            `cell-${label.row}-${label.col}`
        );

        if(!cell) return;

        cell.innerHTML = `

            <div class="luit-wrapper">

                <div class="luit-letter">
                    ${label.letter}
                </div>

                <div class="luit-name">
                    ${label.title}
                </div>

            </div>

        `;
    });
}




function renderLMLogo() {

    const centerCell =
    document.getElementById(
        "cell-7-7"
    );

    if (!centerCell) return;

    centerCell.innerHTML = `

        <div class="lm-logo">

            LM

        </div>

    `;

    centerCell.style.background = `
        conic-gradient(
            red 0deg 90deg,
            green 90deg 180deg,
            yellow 180deg 270deg,
            blue 270deg 360deg
        )
    `;
}

function renderSafeZones() {

    if (
        typeof SAFE_ZONES ===
        "undefined"
    ) {
        return;
    }

    SAFE_ZONES.forEach(index => {

        const pos =
        MAIN_PATH[index];

        if (!pos) return;

        const cell =
        document.getElementById(
            `cell-${pos.row}-${pos.col}`
        );

        if (!cell) return;

        cell.style.border =
        "2px solid white";

        cell.style.boxShadow =
        "0 0 8px gold";
    });
}

function renderHomeTokens() {

    window.tokens.forEach(
    (token, index) => {

        if (
            token.pathIndex !== -1 ||
            token.finished
        ) {
            return;
        }

        const cell =
        document.getElementById(
            `cell-${token.row}-${token.col}`
        );

        if (!cell) return;

        const piece =
        document.createElement("div");

        piece.className =
        "token";

        piece.style.background =
        token.color;

        piece.addEventListener(
            "click",
            () => {

                if (
                    token.color !==
                    currentPlayer
                ) {
                    return;
                }

                window.selectedToken =
                index;
            }
        );

        cell.appendChild(piece);
    });
}

function renderBoardTokens() {

    window.tokens.forEach(
    (token, index) => {

        if (
            token.pathIndex === -1 ||
            token.homeIndex >= 0 ||
            token.finished
        ) {
            return;
        }

        const pos =
        MAIN_PATH[
            token.pathIndex
        ];

        if (!pos) return;

        const cell =
        document.getElementById(
            `cell-${pos.row}-${pos.col}`
        );

        if (!cell) return;

        const piece =
        document.createElement("div");

        piece.className =
        "token";

        piece.style.background =
        token.color;

        piece.addEventListener(
            "click",
            () => {

                if (
                    token.color !==
                    currentPlayer
                ) {
                    return;
                }

                window.selectedToken =
                index;
            }
        );

        cell.appendChild(piece);
    });
}

function renderHomeLaneTokens() {

    window.tokens.forEach(
    (token, index) => {

        if (
            token.homeIndex < 0 ||
            token.finished
        ) {
            return;
        }

        const path =
        HOME_PATHS[
            token.color
        ];

        if (!path) return;

        const pos =
        path[token.homeIndex];

        if (!pos) return;

        const cell =
        document.getElementById(
            `cell-${pos.row}-${pos.col}`
        );

        if (!cell) return;

        const piece =
        document.createElement("div");

        piece.className =
        "token";

        piece.style.background =
        token.color;

        piece.addEventListener(
            "click",
            () => {

                if (
                    token.color !==
                    currentPlayer
                ) {
                    return;
                }

                window.selectedToken =
                index;
            }
        );

        cell.appendChild(piece);
    });
}

function renderTokens() {

    document
    .querySelectorAll(".token")
    .forEach(
        token => token.remove()
    );

    renderLUITLabels();

    renderLMLogo();

    renderHomeTokens();

    renderBoardTokens();

    renderHomeLaneTokens();
}

createBoard();

renderColoredHomePaths();

renderLUITLabels();

renderLMLogo();

renderSafeZones();

renderTokens();