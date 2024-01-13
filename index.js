function hasTargetSum(array, target) {
  const seenNumbers = new Set(); // initialize an empty Set

  for (const number of array) {
    const complement = target - number;

    // .has returns true if the Set includes the complement
    if (seenNumbers.has(complement)) return true;

    // .add adds the number to the Set
    seenNumbers.add(number);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

if (require.main === module) {
  // You can add test cases or other code to run when the script is executed directly
}

module.exports = hasTargetSum;
