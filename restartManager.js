const restartBtn =
document.getElementById(
    "restart-btn"
);

if(restartBtn){

    restartBtn.addEventListener(
        "click",
        () => {

            const answer =
            confirm(
                "Restart the game?"
            );

            if(answer){

                location.reload();
            }
        }
    );
}