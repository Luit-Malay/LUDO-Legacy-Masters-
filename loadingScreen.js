window.addEventListener(
    "load",
    () => {

        setTimeout(() => {

            const loading =
            document.getElementById(
                "loading-screen"
            );

            if(loading){

                loading.remove();
            }

        },4000);

    }
);