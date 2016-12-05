function diceRoller(target, numOfDice, sides, count = 0) {
  var total = 0;
  if (numOfDice == 1) {
    for (var x = 1; x <= sides; x++) {
      if (x + count <= target){
        total++;
      }
    }
    return total;
  }
  else {
    for (var q = 1; q <= sides; q++) {
      total += diceRoller(target, numOfDice-1, sides, q+count);
    }
    return total;
  }
}

console.log(diceRoller(7, 2, 6));
console.log(diceRoller(11, 3, 6));
