function foo(a, b) {
  // Explicit type checking
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    // Handle non-numeric inputs appropriately.  Examples:
    return 'Invalid input'; // Return error message
    // or
    return parseFloat(a) + parseFloat(b); // Attempt numeric conversion
  }
}

console.log(foo(1, '1')); // Output: Invalid input
console.log(foo(1, 1)); // Output: 2
console.log(foo('1', 1)); // Output: Invalid input