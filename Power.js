const power = (base, exp) => {
  if(exp === 0) {
    console.log('Let\'s give it a higher exponent!')
    return 1;
  }
  var sum = 1;
  for(let i = 1; i <= exp;i++) {
    sum *= base;
    console.log(sum);
  }
  return sum;
};

console.log(power(2, 4));