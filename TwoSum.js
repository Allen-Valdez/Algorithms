// Step 1: Understand the Problem - I need to iterate through the array and pick out numbers which equal the target sum, they cannot be the same index number either. Ex - Index 1 + Index 1 is not allowed
// Step 2: Concrete Examples - Input: [1,4,5,6,8,9] targetSum = 14; Output: [6,8]
// Step 3: Break It Down!
// I.) Create a for loop that will iterate through the array, storing each value one at a time to a variable to be able to compare with another value to see if they achieve the targetSum.
// II.) Create a second for loop that will iterate through the array starting at index 1 and always be ahead of the first loop to avoid adding the same index. The value will be stored in another variable to compare with the first value.
// III.) If I find the target sum within the array, I will return the numbers that equaled the targetSum, if I cannot find the values I will return an empty array.
// Step 4: Solve or Simplify - Lets solve it!
arr = [3, 5, -4, 8, 11, 1, -1, 6];
targetSum = 10

const TwoSumArray = (arr, targetSum) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let firstNum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let secondNum = arr[j];
      if (firstNum + secondNum === targetSum) {
        console.log([firstNum, secondNum]);
        return [firstNum, secondNum];
      }
    }
  }
  return [];
};

TwoSumArray(arr, targetSum)
// Step 5: Look back and Refactor - I could use hashtables maybe?

