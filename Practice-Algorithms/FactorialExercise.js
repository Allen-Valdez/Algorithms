
function factorial(num) {
  let sum = 1;
  for (let i = num; i <= num; i--) {
    if (i === 0) {
      return sum;
    }
    console.log(i);
    sum *= i;
    console.log(sum);
  }
  return sum;
}

console.log(factorial(4));