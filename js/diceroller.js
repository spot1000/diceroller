function percentage(target, diceInPool, under) {

// creates an array of possible results from 0 to target
  function threshReset(target, firstDice, masterArr) {
    var threshPool = []
    for (var x = 0; x <= target; x++) {
      threshPool.push(0);
    }
    if (target < firstDice) {
      threshPool = threshPool.slice(0,target+1); //check for one dice case
    }
    if (masterArr) { // sets possible results for first dice
      for (var x = 1; x <= firstDice; x++) {
        threshPool[x] = 1;
      }
      if (target < firstDice) {
        threshPool = threshPool.slice(0,target+1); //check for one dice case
      }
    }
    return threshPool;
  }

// dice roller function, returns total number of possible rolls to achieve target or less
  function diceRoller(target, dice) {

    var deeOne = threshReset(target, dice[0], true);
    var deeTwo = threshReset(target, dice[0], false);
    var deethree = threshReset(target, dice[0], false);

    for (var q = 1; q < dice.length; q++) {

      for(var w = 1; w <= deeOne.length; w++) {
        for (var e = 1; e <= dice[q]; e++) {
          if (deeOne[w] > 0 && e+w <= target){
            deeTwo[e+w] += deeOne[w];
            }
          }
        }
        deeOne = deeTwo.slice();
        deeTwo = deethree.slice();
        
      }

    var total = deeOne.reduce(function(a,b){
      return a+b;
    });
    return total
  }

  // check if over or under, return appropriate percentage
  var percentage = diceRoller(target, diceInPool) /
    dice.reduce(function(acc, sides) { return acc * sides; }, 1);

  if (under == true) {
  return percentage;
  }
  else {
    return 1 - percentage;
  }

}
