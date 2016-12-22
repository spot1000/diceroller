var dieNames = ["4", "6", "8", "10", "12", "20"];
var dice = {};

var thresh = document.getElementById("thresh"),
    diePool = document.getElementById("diePool");

function dieRemoveFactory(id) {
	return function() {
		document.getElementById(id).remove();
		calculate();
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

document.getElementById("threshView").value = thresh.value;

calculate();
console.log(getDiceInPool());
