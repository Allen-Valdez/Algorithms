const ReversedStr = (str) => {
  let reverse = '';
  console.log(str);
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
};

console.log(ReversedStr('Hello world!'))