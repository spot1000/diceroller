var dice = document.getElementById("dice"),
    diceMinus = document.getElementById("dice-"),
    dicePlus = document.getElementById("dice+"),
    sides = document.getElementById("sides"),
    sidesMinus = document.getElementById("sides-"),
    sidesPlus = document.getElementById("sides+"),
    thresh = document.getElementById("thresh"),
    threshMinus = document.getElementById("thresh-"),
    threshPlus = document.getElementById("thresh+");
    
function assignOnclick(minus, plus, target) {
    minus.onclick = function() {
       target.innerHTML--;
       calculate();
    };
    plus.onclick = function() {
        target.innerHTML++;
        calculate();
    };
}

assignOnclick(diceMinus, dicePlus, dice);
assignOnclick(sidesMinus, sidesPlus, sides);
assignOnclick(threshMinus, threshPlus, thresh);

function calculate() {
  document.getElementById("chance").innerHTML = percentage(
    parseInt(thresh.innerHTML), parseInt(dice.innerHTML),
    parseInt(sides.innerHTML), false); 
}

calculate();