/**
 * 1. loop over the linger string
 * 2. loop over the shorter string
 * 3. if the characters do match, keep going
 * 4. if the inner loop completes a match increment the count
 * 5. Return the count
 *  What are the inputs?
 *  a string of characters and a target string to match
 */

const naiveString = (string, target) => {
  let count = 0;
  for (let i = 0; i < string.length - target.length; i++) {
    if (string.at(i) === target.at(0)) {
      for (let j = 0; j < target.length - 1; j++) {
        if (string.at(i + j) !== target.at(j)) break;
        count++;
      }
    }
  }
  // the count is of characters that match.
  // For every whole substring the count will divide evenly,
  // which is the count of substring occurences
  return Math.floor(count / target.length);
};

console.log(naiveString("owowomgooomg", "omg")); // 1

// do I understand the problem? yes. The target string sequence is searched for in the host string.
// all matching sequences are counted. A number for how many matches occur is returned.
//
//        v
//  'owowomgowomg' , 'omg'
//         ^            ^
