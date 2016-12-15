var dice = document.getElementById("dice"),
    sides = document.getElementById("sides"),
    thresh = document.getElementById("thresh");
    
function assignOnclick(element) {
   //element.onchange = calculate;
   } 


assignOnclick(dice);
assignOnclick(sides);
assignOnclick(thresh);

function calculate() {
  document.getElementById("chance").innerHTML = percentage(
    parseInt(thresh.value), parseInt(dice.value),
    parseInt(sides.value), false); 
}

calculate();