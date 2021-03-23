// How do we search?

// Given an array, the simpliest way to search for any value is to look at every element in the array and check if it's value we want.

let states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

// JavaScrit has a search!

// There are many different search methods on arrays in JavaScript:
// indexOf
// includes
// find
// findIndex

// But how do these functions work?
// If you use IndexOf, it will give you the index of the exact value you are searching for.
console.log(states.indexOf('California'))
// If the value does not exist it will return -1
console.log(states.indexOf('C'));
// includes will return a boolean, true or false depending if the value exists
console.log(states.includes('Hawaii'));
console.log(states.includes('Canada'));

// All of these are called Linear Search!!

// Linear search is when you visit one item at a time, you either start in the beginning or the end, but you look at one item at a time.

// Example:
// Write the function called linearSearch which accepts an array and a value and returns the index at which the value exists/ If the value does not exist in the array, return -1

// DO NOT use indexOf to implement this function!

const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(i)
    if (arr[i] == val) {
      var num = i;
      return num;
    }
  }
};

console.log(linearSearch([10, 15, 20, 25, 30], 15))



