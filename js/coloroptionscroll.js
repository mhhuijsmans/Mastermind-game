function setColorOptionPosition() {
    switch(turn) {
        case 1:
            currentTurn = $('#guess1');
            break;
        case 2:
            currentTurn = $('#guess2');
            break;
        case 3:
            currentTurn = $('#guess3');
            break;
        case 4:
            currentTurn = $('#guess4');
            break;
        case 5:
            currentTurn = $('#guess5');
            break;
        case 6:
            currentTurn = $('#guess6');
            break;
        case 7:
            currentTurn = $('#guess7');
            break;
        case 8:
            currentTurn = $('#guess8');
            break;
        case 9:
            currentTurn = $('#guess9');
            break;
        case 10:
            currentTurn = $('#guess10');
            break;
        case 11:
            currentTurn = $('#guess11');
            break;
        case 12:
            currentTurn = $('#guess12');
            break;
    }
    topPosition = currentTurn.position().top;
    console.log('top=' + topPosition);
    masterContainer = $('#mastercontainer');
    leftPosition = masterContainer.position().left + masterContainer.outerWidth() + 30;
    console.log('left=' + leftPosition);
    colors = $('#colorcontainer');
    colors.css('top', topPosition);
    colors.css('left', leftPosition);    
}