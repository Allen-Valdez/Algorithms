// Loop over the longer string
// loop over the short string
// If the characters don't match, break out of the inner loop
// if the characters DO match, keep going
// If you complete the inner loop and find a match, increment the count of matches
// return the count

const stringSearch = (str, pattern) => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] !== str[i + j]) break;
      if (j === pattern.length - 1) {
        console.log('Yeehee found one!');
        counter++;
      }
      }
  }
  return counter;
  };

console.log(stringSearch('zomgbomgggdgdgomgomgomg', 'omg'));