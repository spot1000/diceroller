var dieNames = ["4", "6", "8", "10", "12", "20"];
var dice = {};

var thresh = document.getElementById("thresh"),
    diePool = document.getElementById("diePool"),
    odds = document.getElementById("odds"),

    underIsTrue = true; // static check for over/under button

function dieRemoveFactory(id) { // remove function for dice in pool
	return function() {
		document.getElementById(id).remove();
		calculate(underIsTrue);
    changeMaxMin();
	}
}

/*creates object for each dicevalue in dieNames
each die is clickable, and adds a button to dicepool
to allow for removal*/
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
		calculate(underIsTrue);
    changeMaxMin();
	}
}

for (dieName of dieNames) { // creates a button for each die in dieNames
	dice[dieName] = document.getElementById(dieName);
	dice[dieName].onclick = onclickFactory(dieName);
}

function displayValue(element, value) {
	document.getElementById(element).value = value;
	calculate(underIsTrue);
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

function calculate(under) { //checkes if underIsTrue is true or false, passes appropriate variables
  var threshVar = parseInt(thresh.value);
  if (!under) { //if user has selected over, checks diceroller at thresh minus 1 to account for value = thresh
    threshVar--;
  }
  document.getElementById("chance").innerHTML =	Math.round(percentage(threshVar, getDiceInPool(), under).toFixed(2)*100) + '%';
  console.log(percentage(threshVar, getDiceInPool(), under));
}

function changeMaxMin() { //changes the min/max of the slider/input area
  var thresh = document.getElementById('thresh');
  var newMax = getDiceInPool().reduce(function(a,b) {
    return a+b
  });
  var newMin = getDiceInPool().length;
  thresh.setAttribute('max', newMax);
  thresh.setAttribute('min', newMin);
}

function overUnderCheck() {// checks if user has clicked over/under button, and displays appropriate values
  if (underIsTrue){
    underIsTrue = false;
    document.getElementById('rollUnder').innerHTML = 'Chance of rolling threshold value or more:';
    document.getElementById('odds').innerHTML = "Check Under Odds?";
    calculate(underIsTrue);
  } else {
    underIsTrue = true;
    document.getElementById('rollUnder').innerHTML = 'Chance of rolling threshold value or less:';
    document.getElementById('odds').innerHTML = "Check Over Odds?";
    calculate(underIsTrue);
  }
}

odds.onclick = function() { // functions the button
  overUnderCheck();
}


document.getElementById("threshView").value = thresh.value;

calculate();
