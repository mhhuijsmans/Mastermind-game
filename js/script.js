/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var colorsAmountSetting = document.querySelector("#colorsamount");
var turnsAmountSetting = document.querySelector("#turnsamount");
var turn;
var guessColorNumber;
var colorsArray = ["color1","color2","color3","color4","color5","color6"];
var colorCode = [];
var codeCopy = [];
var guessArray = [];
var checkedArray = [];
var colorContainer = document.querySelector("#colorcontainer");
var clickedColor;
var message = document.querySelector("#message");


function disableColor() {
    var colorOptions = document.querySelectorAll(".coloroption");
    var iColorOption;
    for (iColorOption = 0; iColorOption < colorOptions.length; iColorOption++) {
        console.log("BANG");
        colorOptions[iColorOption].disabled = true;
    }
}

function enableColor() {
    var colorOptions = document.querySelectorAll(".coloroption");
    var iColorOption;
    for (iColorOption = 0; iColorOption < colorOptions.length; iColorOption++) {
        colorOptions[iColorOption].disabled = false;
    }
}

function newGame() {
    enableColor();
    turn = 1;
    guessColorNumber = 1;
    colorCode = [];
    codeCopy = [];
    guessArray = [];
    checkedArray = [];
    var colorsAmount = colorsAmountSetting.value;
    var turnsAmount = turnsAmountSetting.value;
    
    colorContainer.innerHTML = "";
    var iColor;
    for (iColor = 0; iColor < colorsAmount; iColor++) {
        colorContainer.innerHTML += '<button id="color' + (iColor + 1) + '" class="coloroption ' +colorsArray[iColor] + '">&nbsp;</button>';
    }
    
    function generateCode() {
        var iGenerate = Math.floor(Math.random() * colorsAmount);
        return iGenerate;
    }
    (function() {
        colorCode.push(colorsArray[generateCode()]);
        colorCode.push(colorsArray[generateCode()]);
        colorCode.push(colorsArray[generateCode()]);
        colorCode.push(colorsArray[generateCode()]);
        console.log(colorCode);
    }());
    
    var solutionContainer = document.querySelector("#solutioncontainer");
    solutionContainer.innerHTML = '<span id="solutioncolor1" class="solutioncolor">&nbsp;</span><span id="solutioncolor2" class="solutioncolor">&nbsp;</span><span id="solutioncolor3" class="solutioncolor">&nbsp;</span><span id="solutioncolor4" class="solutioncolor">&nbsp;</span>';
    
    var guessesContainer = document.querySelector("#guessescontainer");
    guessesContainer.innerHTML = "";
    
    var iTurns;
    for (iTurns = turnsAmount; iTurns > 0; iTurns--) {
        guessesContainer.innerHTML += 
            '<div id="guess' + iTurns + '" class="guesscontainer"><div id="hint' + iTurns + ' "class="hintcontainer"></div><div id="guesscolorcontainer' + iTurns + '" class="guesscolorcontainer"></div></div>';
    }
    
    var hintContainer = document.querySelectorAll(".hintcontainer");
    var iHint;
    var hintNumber = hintContainer.length;
    for (iHint = 0; iHint < hintContainer.length; iHint++) {
        hintContainer[iHint].innerHTML += '<span id="hint' + hintNumber + 'a" class="hint">&nbsp;</span><span id="hint' + hintNumber + 'b" class="hint">&nbsp;</span><span id="hint' + hintNumber + 'c" class="hint">&nbsp;</span><span id="hint' + hintNumber + 'd" class="hint">&nbsp;</span>';
        hintNumber--;
    }
    
    var guessColorContainer = document.querySelectorAll(".guesscolorcontainer");
    var iGuess;
    var guessNumber = guessColorContainer.length;
    for (iGuess = 0; iGuess < guessColorContainer.length; iGuess++) {
        guessColorContainer[iGuess].innerHTML += '<span id="guesscolor' + guessNumber + 'a" class="guesscolor">&nbsp;</span><span id="guesscolor' + guessNumber + 'b" class="guesscolor">&nbsp;</span><span id="guesscolor' + guessNumber + 'c" class="guesscolor">&nbsp;</span><span id="guesscolor' + guessNumber + 'd" class="guesscolor">&nbsp;</span>';
        guessNumber--;
    }
}

newGame();

function copyTheCode() {
    codeCopy[0] = colorCode[0];
    codeCopy[1] = colorCode[1];
    codeCopy[2] = colorCode[2];
    codeCopy[3] = colorCode[3];
}

function showSolution() {
    var solutionColors = document.querySelectorAll(".solutioncolor");
    var iSolution;
    for (iSolution = 0; iSolution < solutionColors.length; iSolution++) {
        solutionColors[iSolution].classList.add(colorCode[iSolution]);
    }
}

function checkGuess() {
    copyTheCode();
    var i;
    var j;
    for (i = 0; i < 4; i++) {
        if (guessArray[i] === codeCopy[i]) {
          checkedArray.push("black");
          codeCopy[i] = guessArray[i] = null;
        }
    }
    
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            if (guessArray[i] && codeCopy[j]) {
                if (guessArray[i] === codeCopy[j]) {
                    checkedArray.push("white");
                    codeCopy[j] = guessArray[i] = null;
                }
            }
        }
    } 
    
    var feedback = document.querySelectorAll("#guess" + turn + " .hint");
    var iFeedback;
    for (iFeedback = 0; iFeedback < feedback.length; iFeedback++) {
        feedback[iFeedback].classList.add(checkedArray[iFeedback]);
    }
    
    if (checkedArray[0] === "black" && checkedArray[1] === "black" &&checkedArray[2] === "black" &&checkedArray[3] === "black") {
        message.innerHTML = "Je hebt gewonnen!";
        showSolution();
        disableColor();
    }
    else {
        if (turn == turnsAmountSetting.value) {
            message.innerHTML = "Je hebt verloren!";
            showSolution();
            disableColor();
            }
    }
    
    guessArray = [];
    checkedArray = [];
}

function whichColor(event) {
    clickedColor = event.target;
    if (clickedColor.id == "colorcontainer") {
        console.log("click miss");
    }
    else {
    var guessColor = document.querySelectorAll("#guesscolorcontainer" + turn + " .guesscolor");
        switch(guessColorNumber) {
            case 1: 
                guessColor[0].classList.add(clickedColor.id);
                guessArray.push(clickedColor.id);
                guessColorNumber++;
                break;
            case 2:
                guessColor[1].classList.add(clickedColor.id);
                guessArray.push(clickedColor.id);
                guessColorNumber++;
                break;
            case 3:
                guessColor[2].classList.add(clickedColor.id);
                guessArray.push(clickedColor.id);
                guessColorNumber++;
                break;
            case 4:
                guessColor[3].classList.add(clickedColor.id);
                guessArray.push(clickedColor.id);
                guessColorNumber = 1;
                checkGuess();
                turn++;
                setColorOptionPosition();
                break;            
        }
    }
}

colorContainer.addEventListener('click', whichColor, false);

function turnsOptionsSet() {
    if (colorsAmountSetting.value === "4") {
        turnsAmountSetting.querySelectorAll("option")[0].value = 6;
        turnsAmountSetting.querySelectorAll("option")[0].innerHTML = 6;
        turnsAmountSetting.querySelectorAll("option")[1].value = 9;
        turnsAmountSetting.querySelectorAll("option")[1].innerHTML = 9;
        colorContainer.classList.add("colors4");
        colorContainer.classList.remove("colors6");
    }
    if (colorsAmountSetting.value === "6") {
        turnsAmountSetting.querySelectorAll("option")[0].value = 9;
        turnsAmountSetting.querySelectorAll("option")[0].innerHTML = 9;
        turnsAmountSetting.querySelectorAll("option")[1].value = 12;
        turnsAmountSetting.querySelectorAll("option")[1].innerHTML = 12;
        colorContainer.classList.add("colors6");
        colorContainer.classList.remove("colors4");
    }
    
    turnsAmountSetting.selectedIndex = 0;
    newGame();
}

colorsAmountSetting.addEventListener('change', turnsOptionsSet, false);
turnsAmountSetting.addEventListener('change', newGame, false);