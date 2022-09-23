// const findLongestSubstring = (str) => {
//   let result = 0;
//   let tally = 0;
//   let uniqueChars = {};

//   let leftHead = 0;
//   let rightHead = 1;

//   for (let i = 0; i < 10 - 1; i++) {
//     // edge case empty string
//     if (str === '') {
//       return 0;
//     }

//     let left = str[leftHead];
//     let right = str[rightHead];
//     // if the right reaches the end of the string, return tally -- Base case
//     if (right === undefined) {
//       return result;
//     }

//     if (left === right || uniqueChars[right]) {
//       // reset the window
//       leftHead = rightHead + 1;
//       rightHead += 2;
//       // update the result if the current substring is greater
//       if (tally > result) {
//         result = tally;
//       }
//     }

//     // if the left !== right
//     if (!uniqueChars[right]) {
//       rightHead += 1;
//       uniqueChars[right] = 1;
//       tally += 1;
//     }
//   }

//   return result; // output: number = count of the longeset substr, unique characters
// };

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      // this triggers when the char is not unique
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("rithmschool")); // 7
