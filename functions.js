// ==========================================
// 1. Check if a number is even
// ==========================================
function isEven(num) {
  // The modulo operator (%) returns the remainder. 
  // If a number divided by 2 has a remainder of 0, it is even.
  return num % 2 === 0;
}

console.log("Is 4 even?", isEven(4)); // Output: true
console.log("Is 7 even?", isEven(7)); // Output: false


// ==========================================
// 2. Find the largest of three numbers
// ==========================================
function findLargest(a, b, c) {
  // Using JavaScript's built-in Math object
  return Math.max(a, b, c);
  
  /* Alternative way using logic:
     if (a >= b && a >= c) return a;
     if (b >= a && b >= c) return b;
     return c;
  */
}

console.log("Largest of 5, 12, 8 is:", findLargest(5, 12, 8)); // Output: 12


// ==========================================
// 3. Reverse a string
// ==========================================
function reverseString(str) {
  // split('') turns the string into an array of characters
  // reverse() reverses the array
  // join('') puts it back together into a string
  return str.split('').reverse().join('');
}

console.log("Reversed 'kickstarter':", reverseString("kickstarter")); // Output: retratskcik