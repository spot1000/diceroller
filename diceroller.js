function percentage(target, diceInPool, over) {
  
	console.log("Dice in pool: ", diceInPool);
	function diceRoller(target, dice, count = 0) {

		console.log(dice);
		if (dice.length == 0)
			return 1;

    var total = 0; // counter to check possibilities of rolls
    
    if (dice.length == 1) {
      for (var x = 1; x <= dice[0]; x++) {
        if (x + count <= target){
          total++;
        }
      }
      return total;
    }
    else {
      for (var q = 1; q <= dice[0]; q++) {
        total += diceRoller(target, dice.slice(1), q+count);
      }
      return total;
    }
  } 
  
  // check if over or under, return appropriate percentage
  var percentage = diceRoller(target, diceInPool) /
    dice.reduce(function(acc, sides) { return acc * sides; }, 1);
    
  if (over == true) {
  return 1 - percentage;
  } 
  else {
    return percentage;
  }
    
}
