
var target = 7;
var numOfDice = 2;
var newResults = [];
var sides = 6;

/*
for (var w = 0; w <= sides; w++) {
  singleArr.push(1)
}

for (var z = 0; z < 12; z++){
  results.push(0);
}


for (var x = 0; x < sides; x++) {
  for (var q = 1; q <= sides; q++) {
    results[x+q] += singleArr[q];
  }
}

console.log(results)
*/



function diceRoller(target, numOfDice, sides) {
  var results = [];
  for (var x = 0; x <= target; x++) {
    results.push(0)
  }
  newResults = results.slice();
  results[0] = 1;

  for (var q = 0; q < numOfDice; q++) {
    for (var w = 1; w <= sides && q+w < target; w++) {
      results[q+w] = results[q];
    }
    results[q] = 0;
  }
  return results;

}

console.log(diceRoller(7,2,6));
