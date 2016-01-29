$(document).ready(function() {
    function setCircleSize() {
        solutioncolorSize = Math.floor($('.solutioncolor').outerWidth());
        $('.solutioncolor').css('width', solutioncolorSize);
        $('.solutioncolor').css('height', solutioncolorSize);
        hintSize = Math.floor($('.hint').outerWidth());
        $('.hint').css('width', hintSize);
        $('.hint').css('height', hintSize);
        guesscolorSize = Math.floor($('.guesscolor').outerWidth());
        $('.guesscolor').css('width', guesscolorSize);
        $('.guesscolor').css('height', guesscolorSize);
        coloroptionSize = Math.floor($('.coloroption').outerWidth());
        $('.coloroption').css('width', coloroptionSize);
        $('.coloroption').css('height', coloroptionSize);
    }
    setCircleSize();
    setColorOptionPosition();
    
    $(window).resize(function() {
        setCircleSize();
        setColorOptionPosition();
    });
    
    $(window).change(function() {
        setCircleSize();
        setColorOptionPosition();
    });
});