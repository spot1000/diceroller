function percentage(target, numOfDice, sides, over) {
  
  function diceRoller(target, numOfDice, sides, count = 0) {
    
    var total = 0; // counter to check possibilities of rolls
    
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
  
  // check if over or under, return appropriate percentage
  var percentage = diceRoller(target, numOfDice, sides) /
    Math.pow(numOfDice, sides);
    
  if (over == true) {
  return 1 - percentage;
  } 
  else {
    return percentage;
  }
    
}

console.log(percentage(6,1,6,true));
console.log(percentage(1,1,6,false));
