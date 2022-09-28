/**
 * Capitalize the first letter of each string in the array.
 * @param {[*]} arr array of strings
 */
const capitalizeFirst = arr => {
  let capital = arr[0].substr(0, 1).toUpperCase();
  let lowerCase = arr[0].substr(1);
  let uppered = capital + lowerCase;
  if (arr.length === 1) {
    return [uppered];
  }
  return [uppered].concat(capitalizeFirst(arr.slice(1)));
};

console.log(capitalizeFirst(["taco", "basket", "paint"]));
