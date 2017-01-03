var dieNames = ["4", "6", "8", "10", "12", "20"];
var dice = {};

var thresh = document.getElementById("thresh"),
    diePool = document.getElementById("diePool"),
    odds = document.getElementById("odds"),

    underIsTrue = true;

function dieRemoveFactory(id) {
	return function() {
		document.getElementById(id).remove();
		calculate();
    changeMaxMin();
	}
}

function onclickFactory(dieName) {
	return function() {
		id = (new Date()).getTime();
		die = document.createElement('button');
		die.sides = parseInt(dieName);
		die.style.color = "white";
		die.style.backgroundColor = "green";
		die.id = id;
		die.onclick = dieRemoveFactory(id);
		die.appendChild(document.createTextNode("d" + dieName));
		diePool.appendChild(die);
		calculate();
    changeMaxMin();
	}
}

for (dieName of dieNames) {
	dice[dieName] = document.getElementById(dieName);
	dice[dieName].onclick = onclickFactory(dieName);
}

function displayValue(element, value) {
	document.getElementById(element).value = value;
	calculate();
}

function getDiceInPool() {
	dice = [];
	node = diePool.firstChild;
	while(node) {
		if (node.nodeType != 3) {
			dice.push(node.sides);
		}
		node = node.nextSibling;
	}
	return dice;
}

function calculate() {
  var threshVar = parseInt(thresh.value);
  document.getElementById("chance").innerHTML =
		percentage(threshVar, getDiceInPool(), false);
}

function changeMaxMin() {
  var thresh = document.getElementById('thresh');
  var newMax = getDiceInPool().reduce(function(a,b) {
    return a+b
  });
  var newMin = getDiceInPool().length;
  thresh.setAttribute('max', newMax);
  thresh.setAttribute('min', newMin);

}

function overUnderCheck() {
  if (underIsTrue){
    underIsTrue = false;
    console.log(underIsTrue);
    document.getElementById('rollUnder').innerHTML = 'Chance of rolling threshold value or more:'
    document.getElementById('odds').innerHTML = "Check Under Odds?"
  } else {
    underIsTrue = true;
    console.log(underIsTrue);
    document.getElementById('rollUnder').innerHTML = 'Chance of rolling threshold value or less:'
    document.getElementById('odds').innerHTML = "Check Over Odds?"
  }
}

odds.onclick = function() {
  overUnderCheck();
}


document.getElementById("threshView").value = thresh.value;

calculate();
console.log(getDiceInPool());
console.log(underIsTrue);
