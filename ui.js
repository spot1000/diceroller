var dice = document.getElementById("dice"),
    sides = document.getElementById("sides"),
    thresh = document.getElementById("thresh");
    
function displayValue(element, value) {
    document.getElementById(element).value = value;
    calculate();
}

function calculate() {
    console.log(parseInt(thresh.value));
    console.log(parseInt(dice.value));
    console.log(parseInt(sides.value));
    console.log(percentage(9,3,6,false))
    const sidesVar = parseInt(sides.value),
        threshVar = parseInt(thresh.value),
        diceVar = parseInt(dice.value);
  document.getElementById("chance").innerHTML = percentage(threshVar, diceVar,
    sidesVar, false);
}

document.getElementById("chance").innerHTML = percentage(9,2,6, false);
//calculate();

document.getElementById("threshView").value = thresh.value;
document.getElementById("sidesView").value = sides.value;
document.getElementById("diceView").value = dice.value;
console.log(thresh.value)