var dice = document.getElementById("dice"),
    sides = document.getElementById("sides"),
    thresh = document.getElementById("thresh");
    
function displayValue(element, value) {
    document.getElementById(element).value = value;
    calculate();
}

function calculate() {
    const sidesVar = parseInt(sides.value),
        threshVar = parseInt(thresh.value),
        diceVar = parseInt(dice.value);
  document.getElementById("chance").innerHTML = percentage( sidesVar, diceVar,
    threshVar, false);
}

document.getElementById("chance").innerHTML = percentage(7,2,6, false);
//calculate();