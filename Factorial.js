// For loop
const factorial = num => {
  total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
};

console.log(factorial(4));

// Recursion

const factorial2 = num => {
  if (num === 1) return 1;
  return num * factorial2(num - 1);
};

console.log(factorial2(4))