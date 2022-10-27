module.exports = {
  validAnagram(input1, input2) {
    let string1 = input1.replace(/\s/g, "").toLowerCase();
    let string2 = input2.replace(/\s/g, "").toLowerCase();
    if (string1 === "" && string2 === "") return true;
    if (string1.length !== string2.length) return false;

    const obj1 = {};
    const obj2 = {};

    for (let char of string1) {
      obj1[char] = ++obj1[char] || 1;
    }
    for (let char of string2) {
      obj2[char] = ++obj2[char] || 1;
    }
    for (let char of string1) {
      if (obj1[char] !== obj2[char]) return false;
    }
    return true;
  },
};
