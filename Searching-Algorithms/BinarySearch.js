// Binary Search is a much faster form of search than linear search
// Rather than eliminating one element at a time, you can eliminate half og the remaining elements at a time.
// Binary search only works on sorted arrays!

let states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

// Divide and Conquer

// We split the array into 2 pieces, then you quick a point usually in the middle. We check both pieces, based on what we are looking for, we throw away the piece that doesnt contain with what we are looking for. We then repeat the process until we find it.

// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

// Step 1: Understand the problem - Create a function that takes in a sorted array and returns the index of whatever value I am looking for.
// Step 2: Concrete Examples - Input: ([1, 2, 3, 4, 5], 2) Output: 1
// Step 3: Break it down

// Step 4: Solve and Simplify - Lets do it!
const binarySearch = (arr, val) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] < val) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
};

console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95 ));