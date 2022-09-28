// write a recursive function that returns a string in reverse

function reverse(word) {
  // have a new word
  let reversed = [];

  function helper(input) {
    // base -- return, what ends this?
    // if the input length is 1.. the last letter, return the last letter; which would be the first one
    if (!input) return;

    reversed.push(input.substr(input.length - 1));
    helper(input.substr(0, input.length - 1));
  }
  // call recursive helper with the @param
  helper(word);
  return reversed.join("");
}

console.log(reverse("awesome"));
