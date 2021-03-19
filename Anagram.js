// Step 1: Understand the problem - I will need to take the first string and compare it with the second string to see if it is an anagram, which means the characters within the first string are the same in the second in any order, however none of them are longer than the other or repeat characters more than the other.
// Step 2: Concrete Examples - validAnagram('anagram', 'nagaram') // true
// Step 3: Break it Down!
// I.) First I want to see if the arays are the same length, that way I can dispose of the ones that arent since they dont meet the criteria
// II.) Then I will create an empty object to keep count
// III.) Then I will create a for loop that will iterate through the first string and store it in the object if its not there, if it is there we will increase the counter by 1
// IV.) I will create another for loop after that will iterate through the second string. If the values do not match what is inside the search object then it is not an anagram. This will return true or false.
//Step 4: Solve or simplify - Lets do it!
const validAnagram = (firstStr, secondStr) => {
  if (firstStr.length !== secondStr.length) {
    return false;
  }
  const search = {};
  for (let i = 0; i < firstStr.length; i++) {
    let letter = firstStr[i];
    search[letter] ? search[letter] += 1 : search[letter] = 1;
  }
  
}
//Step 5: Look back and refactor