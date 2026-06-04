function colorCell(row,col,color){

    const cell =
    document.getElementById(
        `cell-${row}-${col}`
    );

    if(cell){
        cell.style.background =
        color;
    }
}

// RED
for(let r=0;r<=5;r++){
    for(let c=0;c<=5;c++){
        colorCell(r,c,"red");
    }
}

// GREEN
for(let r=0;r<=5;r++){
    for(let c=9;c<=14;c++){
        colorCell(r,c,"green");
    }
}

// BLUE
for(let r=9;r<=14;r++){
    for(let c=0;c<=5;c++){
        colorCell(r,c,"blue");
    }
}

// YELLOW
for(let r=9;r<=14;r++){
    for(let c=9;c<=14;c++){
        colorCell(r,c,"gold");
    }
}

const center =
document.getElementById(
    "cell-7-7"
);

center.style.background =
"white";